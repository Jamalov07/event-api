import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
	UserCreateRequest,
	UserDeleteRequest,
	UserEmailPhoneCheck,
	UserRetrieveAllRequest,
	UserRetrieveAllResponse,
	UserRetrieveOneRequest,
	UserRetrieveOneResponse,
	UserUpdateRequest,
} from './interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Like, Not, Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}

	async userRetrieveAll(payload: UserRetrieveAllRequest): Promise<UserRetrieveAllResponse> {
		const users = await this.userRepository.find({
			where: {
				fullName: payload.fullName ? Like(`%${payload.fullName}%`) : Not(undefined),
				phoneNumber: payload.phoneNumber ? Like(`%${payload.phoneNumber}%`) : Not(undefined),
				email: payload.email ? Like(`%${payload.email}%`) : Not(undefined),
			},
			order: { [payload.sortName]: payload.sortType },
			take: payload.pageSize,
			skip: (payload.pageNumber - 1) * payload.pageSize,
		});
		const usersCount = await this.userRepository.count({
			where: {
				fullName: payload.fullName ? Like(`%${payload.fullName}%`) : Not(undefined),
				phoneNumber: payload.phoneNumber ? Like(`%${payload.phoneNumber}%`) : Not(undefined),
				email: payload.email ? Like(`%${payload.email}%`) : Not(undefined),
			},
		});

		return {
			users: users,
			pageNumber: payload.pageNumber,
			pageSize: users.length,
			totalCount: usersCount,
			totalPages: Math.ceil(usersCount / payload.pageSize),
		};
	}

	async userRetrieveOne(payload: UserRetrieveOneRequest): Promise<UserRetrieveOneResponse> {
		const user = await this.userRepository.findOne({ where: { id: payload.id } });
		if (!user) {
			throw new NotFoundException('user not found');
		}
		return user;
	}

	async userCreate(payload: UserCreateRequest): Promise<null> {
		await this.userEmailPhoneCheck({ email: payload.email, phoneNumber: payload.phoneNumber });
		const newUser = this.userRepository.create({ ...payload });
		await this.userRepository.save(newUser);
		return null;
	}

	async userUpdate(payload: UserUpdateRequest): Promise<null> {
		const user = await this.userRetrieveOne({ id: payload.id, userId: payload.userId });
		await this.userEmailPhoneCheck({ email: payload.email, phoneNumber: payload.phoneNumber, id: payload.id });
		await this.userRepository.update({ id: payload.id }, { ...payload });
		await this.userRepository.save(user);
		return null;
	}

	async userDelete(payload: UserDeleteRequest): Promise<null> {
		await this.userRetrieveOne(payload);
		await this.userRepository.softDelete({ id: payload.id });
		return null;
	}

	private async userEmailPhoneCheck(payload: UserEmailPhoneCheck): Promise<void> {
		const user = await this.userRepository.findOne({
			where: [{ email: payload.email }, { phoneNumber: payload.phoneNumber }],
		});
		if (payload.id) {
			if (user && payload.id !== user.id) {
				throw new BadRequestException('user email or user phone number already exists');
			}
		} else {
			if (user) {
				throw new BadRequestException('user email or user phone number already exists');
			}
		}
	}
}

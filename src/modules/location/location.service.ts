import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
	LocationCreateRequest,
	LocationDeleteRequest,
	LocationNameCheck,
	LocationRetrieveAllRequest,
	LocationRetrieveAllResponse,
	LocationRetrieveOneRequest,
	LocationRetrieveOneResponse,
	LocationUpdateRequest,
} from './interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class LocationService {
	constructor(
		@InjectRepository(Location)
		private locationRepository: Repository<Location>,
	) {}

	async locationRetrieveAll(payload: LocationRetrieveAllRequest): Promise<LocationRetrieveAllResponse> {
		const locations = await this.locationRepository.find({
			where: {
				name: Like(`%${payload.name}%`),
				user: { id: payload.user },
			},
			order: { [payload.sortName]: payload.sortType },
			take: payload.pageSize,
			skip: (payload.pageNumber - 1) * payload.pageSize,
		});
		const locationsCount = await this.locationRepository.count({
			where: {
				name: Like(`%${payload.name}%`),
				user: { id: payload.user },
			},
		});

		return {
			locations: locations,
			pageNumber: payload.pageNumber,
			pageSize: locations.length,
			totalCount: locationsCount,
			totalPages: locationsCount / payload.pageSize,
		};
	}

	async locationRetrieveOne(payload: LocationRetrieveOneRequest): Promise<LocationRetrieveOneResponse> {
		const location = await this.locationRepository.findOne({
			where: { id: payload.id },
		});
		if (!location) {
			throw new NotFoundException('location not found');
		}
		return location;
	}

	async locationCreate(payload: LocationCreateRequest): Promise<null> {
		await this.locationNameCheck({ name: payload.name });
		await this.locationRepository.create({ ...payload });
		return null;
	}

	async locationUpdate(payload: LocationUpdateRequest): Promise<null> {
		await this.locationRetrieveOne({
			id: payload.id,
			userId: payload.userId,
		});
		await this.locationNameCheck({ name: payload.name, id: payload.id });
		await this.locationRepository.update({ id: payload.id }, { ...payload });
		return null;
	}

	async locationDelete(payload: LocationDeleteRequest): Promise<null> {
		await this.locationRetrieveOne(payload);
		await this.locationRepository.softDelete({ id: payload.id });
		return null;
	}

	private async locationNameCheck(payload: LocationNameCheck): Promise<void> {
		const location = await this.locationRepository.findOne({
			where: { name: payload.name },
		});
		if (payload.id) {
			if (location && payload.id !== location.id) {
				throw new BadRequestException('location name already exists');
			}
		} else {
			if (location) {
				throw new BadRequestException('location name already exists');
			}
		}
	}
}

import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsPhoneNumber,
	IsString,
	IsUUID,
	MinLength,
} from 'class-validator';
import { UserUpdateRequest } from '../interfaces';

export class UserUpdateDtoRequest implements UserUpdateRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string;

	@IsEmail()
	@IsString()
	@IsOptional()
	email: string;

	@IsString()
	@IsOptional()
	fullName: string;

	@IsPhoneNumber('UZ')
	@IsOptional()
	phoneNumber: string;

	@MinLength(8)
	@IsString()
	@IsOptional()
	password: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

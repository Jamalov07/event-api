import {
	IsEmail,
	IsNotEmpty,
	IsPhoneNumber,
	IsString,
	IsUUID,
	MinLength,
} from 'class-validator';
import { UserCreateRequest } from '../interfaces';

export class UserCreateDtoRequest implements UserCreateRequest {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	fullName: string;

	@IsPhoneNumber('UZ')
	@IsNotEmpty()
	phoneNumber: string;

	@MinLength(8)
	@IsString()
	@IsNotEmpty()
	password: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

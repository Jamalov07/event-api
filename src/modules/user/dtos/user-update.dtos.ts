import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsNumber, MinLength } from 'class-validator';
import { UserUpdateRequest } from '../interfaces';

export class UserUpdateDtoRequest implements UserUpdateRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

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

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

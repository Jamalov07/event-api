import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsNumber, MinLength } from 'class-validator';
import { UserCreateRequest } from '../interfaces';

export class UserCreateDtoRequest implements Omit<UserCreateRequest, 'user'> {
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
}

import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { LocationCreateRequest } from '../interfaces';

export class LocationCreateDtoRequest implements LocationCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	latitude: string;

	@IsString()
	@IsNotEmpty()
	longutude: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
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

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

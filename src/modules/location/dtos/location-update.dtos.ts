import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { LocationUpdateRequest } from '../interfaces';

export class LocationUpdateDtoRequest implements LocationUpdateRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	latitude: string;

	@IsString()
	@IsOptional()
	longutude: string;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

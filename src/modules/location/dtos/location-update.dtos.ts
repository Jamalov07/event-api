import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { LocationUpdateRequest } from '../interfaces';

export class LocationUpdateDtoRequest implements LocationUpdateRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	latitude: string;

	@IsString()
	@IsOptional()
	longutude: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

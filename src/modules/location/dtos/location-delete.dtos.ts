import { IsNotEmpty, IsNumber } from 'class-validator';
import { LocationDeleteRequest } from '../interfaces';

export class LocationDeleteDtoRequest implements LocationDeleteRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

import { IsNotEmpty, IsUUID } from 'class-validator';
import { LocationDeleteRequest } from '../interfaces';

export class LocationDeleteDtoRequest implements LocationDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

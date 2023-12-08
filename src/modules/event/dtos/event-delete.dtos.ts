import { IsNotEmpty, IsUUID } from 'class-validator';
import { EventDeleteRequest } from '../interfaces';

export class EventDeleteDtoRequest implements EventDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

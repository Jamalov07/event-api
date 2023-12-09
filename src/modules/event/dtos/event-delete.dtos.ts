import { IsNotEmpty, IsNumber } from 'class-validator';
import { EventDeleteRequest } from '../interfaces';

export class EventDeleteDtoRequest implements EventDeleteRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

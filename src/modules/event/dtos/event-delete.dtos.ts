import { IsNotEmpty, IsNumber } from 'class-validator';
import { EventDeleteRequest } from '../interfaces';

export class EventDeleteDtoRequest implements Omit<EventDeleteRequest, 'userId'> {
	@IsNumber()
	@IsNotEmpty()
	id: number;
}

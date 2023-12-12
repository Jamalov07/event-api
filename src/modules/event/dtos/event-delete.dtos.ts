import { IsNotEmpty, IsNumber } from 'class-validator';
import { EventDeleteRequest } from '../interfaces';

export class EventDeleteDtoRequest implements Omit<EventDeleteRequest, 'user'> {
	@IsNumber()
	@IsNotEmpty()
	id: number;
}

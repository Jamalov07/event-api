import { IsDateString, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { EventCreateRequest } from '../interfaces';

export class EventCreateDtoRequest implements EventCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsDateString()
	@IsNotEmpty()
	startDate: Date;

	@IsDateString()
	@IsNotEmpty()
	endDate: Date;

	@IsNumber()
	@IsNotEmpty()
	locationId: string;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

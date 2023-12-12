import { IsDateString, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { EventCreateRequest } from '../interfaces';

export class EventCreateDtoRequest implements Omit<EventCreateRequest, 'user'> {
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
	@IsOptional()
	locationId: number;

	@IsString()
	@IsNotEmpty()
	description: string;
}

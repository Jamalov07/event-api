import { IsDateString, IsOptional, IsString, IsNumber } from 'class-validator';
import { EventUpdateRequest } from '../interfaces';

export class EventUpdateDtoRequest implements Omit<EventUpdateRequest, 'user' | 'id'> {
	@IsString()
	@IsOptional()
	name?: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsDateString()
	@IsOptional()
	startDate?: Date;

	@IsDateString()
	@IsOptional()
	endDate?: Date;

	@IsNumber()
	@IsOptional()
	locationId?: number;
}

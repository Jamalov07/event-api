import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsNumber,
} from 'class-validator';
import { EventUpdateRequest } from '../interfaces';

export class EventUpdateDtoRequest
	implements Omit<EventUpdateRequest, 'userId' | 'id'>
{
	@IsString()
	@IsOptional()
	name?: string;

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

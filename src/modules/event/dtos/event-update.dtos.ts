import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsNumber,
} from 'class-validator';
import { EventUpdateRequest } from '../interfaces';

export class EventUpdateDtoRequest implements EventUpdateRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

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
	locationId?: string;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUUID,
} from 'class-validator';
import { EventUpdateRequest } from '../interfaces';

export class EventUpdateDtoRequest implements EventUpdateRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsOptional()
	name?: string;

	@IsDateString()
	@IsOptional()
	startDate?: Date;

	@IsDateString()
	@IsOptional()
	endDate?: Date;

	@IsUUID('4')
	@IsOptional()
	locationId?: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

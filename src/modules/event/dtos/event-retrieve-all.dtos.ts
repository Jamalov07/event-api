import {
	IsDateString,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	IsUUID,
} from 'class-validator';
import { EventSortNameEnums, EventSortTypeEnums } from '../enums';
import {
	EventRetrieveAllRequest,
	EventRetrieveAllResponse,
	EventRetrieveOneResponse,
} from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { EventRetrieveOneDtoResponse } from './event-retrieve-one.dtos';

export class EventRetrieveAllDtoRequest implements EventRetrieveAllRequest {
	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number;

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number;

	@IsString()
	@IsOptional()
	description?: string;

	@IsString()
	@IsOptional()
	name?: string;

	@IsUUID('4')
	@IsOptional()
	locationId?: number;

	@IsDateString()
	@IsOptional()
	endDate?: number;

	@IsDateString()
	@IsOptional()
	startDate?: number;

	@IsUUID('4')
	@IsOptional()
	user?: number;

	@IsEnum(EventSortNameEnums)
	@IsOptional()
	sortName?: EventSortNameEnums;

	@IsEnum(EventSortTypeEnums)
	@IsOptional()
	sortType?: EventSortTypeEnums;

	@IsUUID('4')
	@IsNotEmpty()
	userId: number;
}

export class EventRetrieveAllDtoResponse implements EventRetrieveAllResponse {
	@ApiProperty({ example: 1 })
	pageNumber: number;

	@ApiProperty({ example: 10 })
	pageSize: number;

	@ApiProperty({ example: 100 })
	totalCount: number;

	@ApiProperty({ example: 10 })
	totalPages: number;

	@ApiProperty({ example: [EventRetrieveOneDtoResponse] })
	events: EventRetrieveOneResponse[];
}

import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	IsUUID,
} from 'class-validator';
import { LocationSortNameEnums, LocationSortTypeEnums } from '../enums';
import {
	LocationRetrieveAllRequest,
	LocationRetrieveAllResponse,
	LocationRetrieveOneResponse,
} from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationRetrieveOneDtoResponse } from './location-retrieve-one.dtos';

export class LocationRetrieveAllDtoRequest
	implements LocationRetrieveAllRequest
{
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
	name?: string;

	@IsUUID('4')
	@IsOptional()
	user?: number;

	@IsEnum(LocationSortNameEnums)
	@IsOptional()
	sortName?: LocationSortNameEnums;

	@IsEnum(LocationSortTypeEnums)
	@IsOptional()
	sortType?: LocationSortTypeEnums;

	@IsUUID('4')
	@IsNotEmpty()
	userId: number;
}

export class LocationRetrieveAllDtoResponse
	implements LocationRetrieveAllResponse
{
	@ApiProperty({ example: 1 })
	pageNumber: number;

	@ApiProperty({ example: 10 })
	pageSize: number;

	@ApiProperty({ example: 100 })
	totalCount: number;

	@ApiProperty({ example: 10 })
	totalPages: number;

	@ApiProperty({ example: [LocationRetrieveOneDtoResponse] })
	locations: LocationRetrieveOneResponse[];
}

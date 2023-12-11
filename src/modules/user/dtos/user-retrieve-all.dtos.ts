import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString } from 'class-validator';
import { UserSortNameEnums, UserSortTypeEnums } from '../enums';
import { UserRetrieveAllRequest, UserRetrieveAllResponse, UserRetrieveOneResponse } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { UserRetrieveOneDtoResponse } from './user-retrieve-one.dtos';

export class UserRetrieveAllDtoRequest implements UserRetrieveAllRequest {
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
	fullName?: string;

	@IsString()
	@IsOptional()
	email?: string;

	@IsString()
	@IsPhoneNumber('UZ')
	@IsOptional()
	phoneNumber?: string;

	@IsEnum(UserSortNameEnums)
	@IsOptional()
	sortName?: UserSortNameEnums;

	@IsEnum(UserSortTypeEnums)
	@IsOptional()
	sortType?: UserSortTypeEnums;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

export class UserRetrieveAllDtoResponse implements UserRetrieveAllResponse {
	@ApiProperty({ example: 1 })
	pageNumber: number;

	@ApiProperty({ example: 10 })
	pageSize: number;

	@ApiProperty({ example: 100 })
	totalCount: number;

	@ApiProperty({ example: 10 })
	totalPages: number;

	@ApiProperty({ example: [UserRetrieveOneDtoResponse] })
	users: UserRetrieveOneResponse[];
}

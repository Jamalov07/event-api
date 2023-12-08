import { UserSortNameEnums, UserSortTypeEnums } from '../enums';
import { UserRetrieveOneResponse } from './user-retrieve-one.interfaces';

export declare interface UserRetrieveAllRequest {
	pageNumber?: number;
	pageSize?: number;
	fullName?: string;
	email?: string;
	phoneNumber?: string;
	sortName?: UserSortNameEnums;
	sortType?: UserSortTypeEnums;
	userId: number;
}

export declare interface UserRetrieveAllResponse {
	pageNumber: number;
	pageSize: number;
	users: UserRetrieveOneResponse[];
	totalCount: number;
	totalPages: number;
}

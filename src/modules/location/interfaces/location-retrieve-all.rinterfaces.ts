import { LocationSortNameEnums, LocationSortTypeEnums } from '../enums';
import { LocationRetrieveOneResponse } from './location-retrieve-one.interfaces';

export declare interface LocationRetrieveAllRequest {
	pageNumber?: number;
	pageSize?: number;
	user?: number;
	name?: string;
	sortName?: LocationSortNameEnums;
	sortType?: LocationSortTypeEnums;
	userId: number;
}

export declare interface LocationRetrieveAllResponse {
	pageNumber: number;
	pageSize: number;
	locations: LocationRetrieveOneResponse[];
	totalCount: number;
	totalPages: number;
}

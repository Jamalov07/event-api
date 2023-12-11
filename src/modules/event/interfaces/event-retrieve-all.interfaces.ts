import { EventSortNameEnums, EventSortTypeEnums } from '../enums';
import { EventRetrieveOneResponse } from './event-retrieve-one.interfaces';

export declare interface EventRetrieveAllRequest {
	pageNumber?: number;
	pageSize?: number;
	name?: string;
	description?: string;
	startDate?: number;
	endDate?: number;
	user?: number;
	locationId?: number;
	sortName?: EventSortNameEnums;
	sortType?: EventSortTypeEnums;
	userId: number;
}

export declare interface EventRetrieveAllResponse {
	pageNumber: number;
	pageSize: number;
	events: EventRetrieveOneResponse[];
	totalCount: number;
	totalPages: number;
}

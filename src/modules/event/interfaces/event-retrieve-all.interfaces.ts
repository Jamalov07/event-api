import { EventSortNameEnums, EventSortTypeEnums } from '../enums';
import { EventRetrieveOneResponse } from './event-retrieve-one.interfaces';

export declare interface EventRetrieveAllRequest {
	pageNumber?: number;
	pageSize?: number;
	startDate?: number;
	endDate?: number;
	locationId?: number;
	user?: number;
	name?: string;
	description?: string;
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

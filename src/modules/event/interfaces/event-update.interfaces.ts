export declare interface EventUpdateRequest {
	id: number;
	name?: string;
	description?: string;
	startDate?: Date;
	endDate?: Date;
	locationId?: number;
	userId: number;
}

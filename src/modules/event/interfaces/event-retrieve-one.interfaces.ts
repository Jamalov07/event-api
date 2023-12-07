import { UserEvent, UserLocation } from '../../user';

export declare interface EventRetrieveOneRequest {
	id: number;
	userId: number;
}

export declare interface EventLocation {
	id: number;
	latitude: string;
	longitude: string;
	name: string;
	createdAt: Date;
}

export declare interface EventUser {
	id: number;
	fullName: string;
	phoneNumber: string;
	email: string;
	createdAt: Date;
	events: UserEvent[];
	locations: UserLocation[];
}

export declare interface EventRetrieveOneResponse {
	id: number;
	startDate: Date;
	endDate: Date;
	name: string;
	description: string;
	location: EventLocation;
	user: EventUser;
	createdAt: Date;
}

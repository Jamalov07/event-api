import { EventLocation } from '../../event/interfaces';
import { LocationEvent } from '../../location';

export declare interface UserRetrieveOneRequest {
	id: number;
	userId: number;
}

export declare interface UserEvent {
	id: number;
	startDate: Date;
	endDate: Date;
	name: string;
	description: string;
	location: EventLocation;
	createdAt: Date;
}

export declare interface UserLocation {
	id: number;
	latitude: string;
	longitude: string;
	name: string;
	createdAt: Date;
	events: LocationEvent[];
}

export declare interface UserRetrieveOneResponse {
	id: number;
	fullName: string;
	phoneNumber: string;
	email: string;
	createdAt: Date;
	events: UserEvent[];
	locations: UserLocation[];
}

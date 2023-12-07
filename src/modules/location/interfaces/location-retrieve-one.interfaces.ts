import { UserEvent, UserLocation } from '../../user';

export declare interface LocationRetrieveOneRequest {
	id: number;
	userId: number;
}

export declare interface LocationEvent {
	id: number;
	startDate: Date;
	endDate: Date;
	name: string;
	description: string;
	createdAt: Date;
}

export declare interface LocationUser {
	id: number;
	fullName: string;
	phoneNumber: string;
	email: string;
	createdAt: Date;
	events: UserEvent[];
	locations: UserLocation[];
}

export declare interface LocationRetrieveOneResponse {
	id: number;
	latitude: string;
	longitude: string;
	name: string;
	user: LocationUser;
	createdAt: Date;
	events: LocationEvent[];
}

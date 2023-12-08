import { IsNotEmpty, IsUUID } from 'class-validator';
import {
	UserEvent,
	UserLocation,
	UserRetrieveOneRequest,
	UserRetrieveOneResponse,
} from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { EventLocation } from '../../event';
import { LocationEvent } from '../../location';

export class UserRetrieveOneDtoRequest implements UserRetrieveOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: number;

	@IsUUID('4')
	@IsNotEmpty()
	userId: number;
}

export class UserEventDto implements UserEvent {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: 'event name' })
	name: string;

	@ApiProperty({ example: new Date() })
	endDate: Date;

	@ApiProperty({ example: new Date() })
	startDate: Date;

	@ApiProperty({ example: 1 })
	location: EventLocation;

	@ApiProperty({ example: 'about event' })
	description: string;

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class UserLocationDto implements UserLocation {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: '64.999' })
	latitude: string;

	@ApiProperty({ example: '56.111' })
	longitude: string;

	@ApiProperty({ example: 'locatio name' })
	name: string;

	@ApiProperty({ example: 1 })
	events: LocationEvent[];

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class UserRetrieveOneDtoResponse implements UserRetrieveOneResponse {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: 'email@gmail.com' })
	email: string;

	@ApiProperty({ example: 'John Doe' })
	fullName: string;

	@ApiProperty({ example: '+998901234567' })
	phoneNumber: string;

	@ApiProperty({ example: new Date() })
	createdAt: Date;

	@ApiProperty({ example: [UserEventDto] })
	events: UserEvent[];

	@ApiProperty({ example: [UserLocationDto] })
	locations: UserLocation[];
}

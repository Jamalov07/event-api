import { IsNotEmpty, IsNumber } from 'class-validator';
import {
	EventLocation,
	EventRetrieveOneRequest,
	EventRetrieveOneResponse,
	EventUser,
} from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { UserEvent, UserLocation } from '../../user';
import { UserEventDto, UserLocationDto } from '../../user/dtos';

export class EventRetrieveOneDtoRequest implements EventRetrieveOneRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

export class EventLocationDto implements EventLocation {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: '46.999' })
	latitude: string;

	@ApiProperty({ example: '65.111' })
	longitude: string;

	@ApiProperty({ example: 'location name' })
	name: string;

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class EventUserDto implements EventUser {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: 'email@gmail.com' })
	email: string;

	@ApiProperty({ example: 'John Doe' })
	fullName: string;

	@ApiProperty({ example: '+998911112233' })
	phoneNumber: string;

	@ApiProperty({ example: [UserEventDto] })
	events: UserEvent[];

	@ApiProperty({ example: [UserLocationDto] })
	locations: UserLocation[];

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class EventRetrieveOneDtoResponse implements EventRetrieveOneResponse {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: 'event name' })
	name: string;

	@ApiProperty({ example: new Date() })
	startDate: Date;

	@ApiProperty({ example: new Date() })
	endDate: Date;

	@ApiProperty({ example: 'about event' })
	description: string;

	@ApiProperty({ example: [EventLocationDto] })
	location: EventLocation;

	@ApiProperty({ example: [EventUserDto] })
	user: EventUser;

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

import { IsNotEmpty, IsNumber } from 'class-validator';
import { LocationEvent, LocationRetrieveOneRequest, LocationRetrieveOneResponse, LocationUser } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { UserEvent, UserLocation } from '../../user';
import { UserEventDto, UserLocationDto } from '../../user/dtos';

export class LocationRetrieveOneDtoRequest implements LocationRetrieveOneRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

export class LocationUserDto implements LocationUser {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: 'email@gmail.com' })
	email: string;

	@ApiProperty({ example: 'John Doe' })
	fullName: string;

	@ApiProperty({ example: '+998912223344' })
	phoneNumber: string;

	@ApiProperty({ example: [UserEventDto] })
	events: UserEvent[];

	@ApiProperty({ example: [UserLocationDto] })
	locations: UserLocation[];

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class LocationEventDto implements LocationEvent {
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

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

export class LocationRetrieveOneDtoResponse implements LocationRetrieveOneResponse {
	@ApiProperty({ example: '8ec8dd99-973e-4966-9a99-40a0b07325e8' })
	id: number;

	@ApiProperty({ example: '45.999' })
	latitude: string;

	@ApiProperty({ example: '56.777' })
	longitude: string;

	@ApiProperty({ example: 'location name' })
	name: string;

	@ApiProperty({ example: LocationUserDto })
	user: LocationUser;

	@ApiProperty({ example: LocationEventDto })
	events: LocationEvent[];

	@ApiProperty({ example: new Date() })
	createdAt: Date;
}

import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { EventCreateRequest } from '../interfaces';

export class EventCreateDtoRequest implements EventCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsDateString()
	@IsNotEmpty()
	startDate: Date;

	@IsDateString()
	@IsNotEmpty()
	endDate: Date;

	@IsUUID('4')
	@IsNotEmpty()
	locationId: string;

	@IsUUID('4')
	@IsNotEmpty()
	userId: string;
}

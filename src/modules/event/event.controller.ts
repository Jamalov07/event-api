import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { ApiHeaders, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import {
	EventCreateDtoRequest,
	EventDeleteDtoRequest,
	EventRetrieveAllDtoRequest,
	EventRetrieveAllDtoResponse,
	EventRetrieveOneDtoRequest,
	EventRetrieveOneDtoResponse,
	EventUpdateDtoRequest,
} from './dtos';
import { EventSortNameEnums, EventSortTypeEnums } from './enums';
import { UserIdRetrieve } from '../../decorators';
import { UserIdDto } from '../auth';

@ApiTags('Event')
@ApiHeaders([{ name: 'Authorization', description: 'Bearer token' }])
@Controller('event')
export class EventController {
	readonly #_service: EventService;
	constructor(service: EventService) {
		this.#_service = service;
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	@ApiQuery({ name: 'pageNumber', required: false, example: 1 })
	@ApiQuery({ name: 'pageSize', required: false, example: 10 })
	@ApiQuery({ name: 'name', required: false, type: String })
	eventRetrieveAll(
		@Query() query: EventRetrieveAllDtoRequest,
		@UserIdRetrieve() user: UserIdDto,
	): Promise<EventRetrieveAllDtoResponse> {
		console.log(query, 1);
		return this.#_service.eventRetrieveAll({
			...query,
			...user,
			pageNumber: query.pageNumber ?? 1,
			pageSize: query.pageSize ?? 10,
			sortName: query.sortName ?? ('createdAt' as EventSortNameEnums),
			sortType: query.sortType ?? ('DESC' as EventSortTypeEnums),
		});
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	eventRetrieveOne(
		@Param() params: EventRetrieveOneDtoRequest,
		@UserIdRetrieve() user: UserIdDto,
	): Promise<EventRetrieveOneDtoResponse> {
		return this.#_service.eventRetrieveOne({
			...params,
			...user,
		});
	}

	@HttpCode(HttpStatus.OK)
	@Post()
	eventCreate(
		@Body() body: EventCreateDtoRequest,
		@UserIdRetrieve() user: UserIdDto,
	): Promise<null> {
		return this.#_service.eventCreate({
			...body,
			...user,
		});
	}

	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	eventUpdate(
		@Param() params: EventRetrieveOneDtoRequest,
		@Body() body: EventUpdateDtoRequest,
		@UserIdRetrieve() user: UserIdDto,
	): Promise<null> {
		return this.#_service.eventUpdate({
			...params,
			...body,
			...user,
		});
	}

	@HttpCode(HttpStatus.OK)
	@Delete(':id')
	eventDelete(
		@Param() params: EventDeleteDtoRequest,
		@UserIdRetrieve() user: UserIdDto,
	): Promise<null> {
		return this.#_service.eventDelete({
			...params,
			...user,
		});
	}
}

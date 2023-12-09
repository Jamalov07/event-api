import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Query,
} from '@nestjs/common';
import { ApiHeaders, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import {
	EventRetrieveAllDtoRequest,
	EventRetrieveAllDtoResponse,
} from './dtos';
import { EventSortNameEnums, EventSortTypeEnums } from './enums';

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
		@Body() body: EventRetrieveAllDtoRequest,
	): Promise<EventRetrieveAllDtoResponse> {
		return this.#_service.eventRetrieveAll({
			...query,
			...body,
			pageNumber: query.pageNumber ?? 1,
			pageSize: query.pageSize ?? 10,
			sortName: query.sortName ?? ('createdAt' as EventSortNameEnums),
			sortType: query.sortType ?? ('DESC' as EventSortTypeEnums),
		});
	}
}

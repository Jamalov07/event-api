import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import {
	EventCreateRequest,
	EventDeleteRequest,
	EventNameCheck,
	EventRetrieveAllRequest,
	EventRetrieveAllResponse,
	EventRetrieveOneRequest,
	EventRetrieveOneResponse,
	EventUpdateRequest,
} from './interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';
import {
	LessThanOrEqual,
	Like,
	MoreThanOrEqual,
	Repository,
	Not,
} from 'typeorm';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Event)
		private eventRepository: Repository<Event>,
	) {}

	async eventRetrieveAll(
		payload: EventRetrieveAllRequest,
	): Promise<EventRetrieveAllResponse> {
		const events = await this.eventRepository.find({
			where: {
				deletedAt: Not(null),
				name: payload.name ? Like(`%${payload.name}%`) : Not(undefined),
				description: payload.description
					? Like(`%${payload.description}%`)
					: Not(undefined),
				startDate: payload.startDate
					? MoreThanOrEqual(new Date(payload.startDate))
					: Not(undefined),
				endDate: payload.endDate
					? LessThanOrEqual(new Date(payload.endDate))
					: Not(undefined),
				location: { id: payload.locationId ?? Not(undefined) },
				user: { id: payload.user ?? Not(undefined) },
			},
			order: { [payload.sortName]: payload.sortType },
			take: payload.pageSize,
			skip: (payload.pageNumber - 1) * payload.pageSize,
		});
		console.log(events);
		const eventsCount = await this.eventRepository.count({
			where: {
				deletedAt: Not(null),
				name: payload.name ? Like(`%${payload.name}%`) : Not(undefined),
				description: payload.description
					? Like(`%${payload.description}%`)
					: Not(undefined),
				startDate: payload.startDate
					? MoreThanOrEqual(new Date(payload.startDate))
					: Not(undefined),
				endDate: payload.endDate
					? LessThanOrEqual(new Date(payload.endDate))
					: Not(undefined),
				location: { id: payload.locationId ?? Not(undefined) },
				user: { id: payload.user ?? Not(undefined) },
			},
		});

		return {
			events: events,
			pageNumber: payload.pageNumber,
			pageSize: events.length,
			totalCount: eventsCount,
			totalPages: eventsCount / payload.pageSize,
		};
	}

	async eventRetrieveOne(
		payload: EventRetrieveOneRequest,
	): Promise<EventRetrieveOneResponse> {
		const event = await this.eventRepository.findOne({
			where: { id: payload.id },
		});
		if (!event) {
			throw new NotFoundException('event not found');
		}
		return event;
	}

	async eventCreate(payload: EventCreateRequest): Promise<null> {
		await this.eventNameCheck({ name: payload.name });
		const event = await this.eventRepository.create({
			...payload,
			userId: payload.userId,
		});
		console.log(event);
		return null;
	}

	async eventUpdate(payload: EventUpdateRequest): Promise<null> {
		await this.eventRetrieveOne({
			id: payload.id,
			userId: payload.userId,
		});
		await this.eventNameCheck({ name: payload.name, id: payload.id });
		await this.eventRepository.update({ id: payload.id }, { ...payload });
		return null;
	}

	async eventDelete(payload: EventDeleteRequest): Promise<null> {
		await this.eventRetrieveOne(payload);
		await this.eventRepository.softDelete({ id: payload.id });
		return null;
	}

	private async eventNameCheck(payload: EventNameCheck): Promise<void> {
		const event = await this.eventRepository.findOne({
			where: { name: payload.name },
		});
		if (payload.id) {
			if (event && payload.id !== event.id) {
				throw new BadRequestException('event name already exists');
			}
		} else {
			if (event) {
				throw new BadRequestException('event name already exists');
			}
		}
	}
}

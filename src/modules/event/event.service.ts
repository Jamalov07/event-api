import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
import { LessThanOrEqual, Like, MoreThanOrEqual, Repository, Not } from 'typeorm';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Event)
		private eventRepository: Repository<Event>,
	) {}

	async eventRetrieveAll(payload: EventRetrieveAllRequest): Promise<EventRetrieveAllResponse> {
		const events = await this.eventRepository.find({
			where: {
				name: payload.name ? Like(`%${payload.name}%`) : Not(undefined),
				description: payload.description ? Like(`%${payload.description}%`) : Not(undefined),
				startDate: payload.startDate ? MoreThanOrEqual(new Date(payload.startDate)) : Not(undefined),
				endDate: payload.endDate ? LessThanOrEqual(new Date(payload.endDate)) : Not(undefined),
				locationId: payload.locationId ?? Not(undefined),
				userId: payload.userId ?? Not(undefined),
			},
			order: { [payload.sortName]: payload.sortType },
			take: payload.pageSize,
			skip: (payload.pageNumber - 1) * payload.pageSize,
		});

		const eventsCount = await this.eventRepository.count({
			where: {
				name: payload.name ? Like(`%${payload.name}%`) : Not(undefined),
				description: payload.description ? Like(`%${payload.description}%`) : Not(undefined),
				startDate: payload.startDate ? MoreThanOrEqual(new Date(payload.startDate)) : Not(undefined),
				endDate: payload.endDate ? LessThanOrEqual(new Date(payload.endDate)) : Not(undefined),
				locationId: payload.locationId ?? Not(undefined),
				userId: payload.userId ?? Not(undefined),
			},
		});

		return {
			events: events,
			pageNumber: payload.pageNumber,
			pageSize: events.length,
			totalCount: eventsCount,
			totalPages: Math.ceil(eventsCount / payload.pageSize),
		};
	}

	async eventRetrieveOne(payload: EventRetrieveOneRequest): Promise<EventRetrieveOneResponse> {
		const event = await this.eventRepository.findOne({ where: { id: payload.id } });
		if (!event) {
			throw new NotFoundException('event not found');
		}
		return event;
	}

	async eventCreate(payload: EventCreateRequest): Promise<null> {
		await this.eventNameCheck({ name: payload.name });
		const event = this.eventRepository.create({ ...payload, userId: payload.user.id });
		await this.eventRepository.save(event);
		return null;
	}

	async eventUpdate(payload: EventUpdateRequest): Promise<null> {
		const event = await this.eventRetrieveOne({ id: payload.id, user: payload.user });
		await this.eventNameCheck({ name: payload.name, id: payload.id });
		await this.eventRepository.update({ id: payload.id }, { ...payload });
		await this.eventRepository.save(event);
		return null;
	}

	async eventDelete(payload: EventDeleteRequest): Promise<null> {
		await this.eventRetrieveOne(payload);
		await this.eventRepository.softDelete({ id: payload.id });
		return null;
	}

	private async eventNameCheck(payload: EventNameCheck): Promise<void> {
		const event = await this.eventRepository.findOne({ where: { name: payload.name } });
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

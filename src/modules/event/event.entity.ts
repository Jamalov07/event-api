import {
	Entity,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from 'typeorm';
import { User } from '../user';
import { Location } from '../location';

@Entity({ name: 'event' })
export class Event {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'start_date', type: 'date' })
	startDate: Date;

	@Column({ name: 'end_date', type: 'date' })
	endDate: Date;

	@Column({ name: 'name', type: 'character varying' })
	name: string;

	@Column({ name: 'description', type: 'character varying' })
	description: string;

	@ManyToOne(() => Location, (location) => location.events)
	location: Location;

	@ManyToOne(() => User, (user) => user.events)
	user: User;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ default: null, name: 'deleted_at' })
	deletedAt: Date;
}

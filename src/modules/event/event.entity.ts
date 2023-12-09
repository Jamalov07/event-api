import {
	Entity,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
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

	@Column({ name: 'location_id', nullable: true })
	locationId: number;
	@JoinColumn({ name: 'locationId' })
	@ManyToOne(() => Location, (location) => location.events, {
		nullable: true,
	})
	location: Location;

	@Column({ name: 'user_id' })
	userId: number;
	@JoinColumn({ name: 'userId' })
	@ManyToOne(() => User, (user) => user.events, {
		nullable: false,
	})
	user: User;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ nullable: true, name: 'deleted_at' })
	deletedAt: Date | null;
}

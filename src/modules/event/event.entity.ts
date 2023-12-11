import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user';
import { Location } from '../location';

@Entity({ name: 'event' })
export class Event {
	@PrimaryGeneratedColumn({
		name: 'id',
		type: 'integer',
	})
	id: number;

	@Column({ name: 'name', type: 'character varying' })
	name: string;

	@Column({ name: 'start_date', type: 'date' })
	startDate: Date;

	@Column({ name: 'end_date', type: 'date' })
	endDate: Date;

	@Column({ name: 'description', type: 'character varying' })
	description: string;

	@ManyToOne(() => Location, (location) => location.events)
	@JoinColumn({ name: 'location_id' })
	location: Location;
	@Column({ name: 'location_id', nullable: true })
	locationId: number;

	@ManyToOne(() => User, (user) => user.events)
	@JoinColumn({ name: 'user_id' })
	user: User;
	@Column({ name: 'user_id' })
	userId: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ nullable: true, name: 'deleted_at' })
	deletedAt: Date | null;
}

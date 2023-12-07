import {
	Entity,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { User } from '../user';
import { Event } from '../event';

@Entity({ name: 'location' })
export class Location {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'latitude', type: 'character varying' })
	latitude: string;

	@Column({ name: 'longitude', type: 'character varying' })
	longitude: string;

	@Column({ name: 'name', type: 'character varying' })
	name: string;

	@ManyToOne(() => User, (user) => user.events)
	user: User;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ default: null, name: 'deleted_at' })
	deletedAt: Date;

	@OneToMany(() => Event, (event) => event.location)
	events: Event[];
}

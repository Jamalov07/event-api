import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../user';
import { Event } from '../event';

@Entity({ name: 'location' })
export class Location {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'name', type: 'character varying' })
	name: string;

	@Column({ name: 'latitude', type: 'character varying' })
	latitude: string;

	@Column({ name: 'longitude', type: 'character varying' })
	longitude: string;

	@ManyToOne(() => User, (user) => user.locations)
	@JoinColumn({ name: 'user_id' })
	user: User;
	@Column({ name: 'user_id' })
	userId: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: Date | null;

	@OneToMany(() => Event, (event) => event.location)
	events: Event[];
}

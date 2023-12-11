import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from '../event';
import { Location } from '../location';

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'character varying', name: 'full_name' })
	fullName: string;

	@Column({ type: 'character varying', name: 'password' })
	password: string;

	@Column({ type: 'character varying', name: 'phone_number' })
	phoneNumber: string;

	@Column({ type: 'character varying', name: 'email' })
	email: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt: Date | null;

	@OneToMany(() => Event, (event) => event.user)
	events: Event[];

	@OneToMany(() => Location, (location) => location.user)
	locations: Location[];
}

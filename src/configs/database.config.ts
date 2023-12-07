import * as dotenv from 'dotenv';
dotenv.config();
import { registerAs } from '@nestjs/config';
import { Event, Location, User } from '../modules';

declare interface DatabaseConfig {
	type: string;
	logging: boolean;
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
	autoLoadEntities: boolean;
	synchronize: boolean;
	entities: any;
}

export const databaseConfig = registerAs<DatabaseConfig>('database', () => {
	return {
		type: 'postgres',
		logging: true,
		host: process.env.DB_HOST,
		port: parseInt(process.env.DB_PORT),
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		autoLoadEntities: true,
		synchronize: process.env.MODE === 'dev',
		entities: [User, Event, Location],
	};
});

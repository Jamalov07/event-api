import * as dotenv from 'dotenv';
dotenv.config();
declare interface HttpServiceOptions {
	host: string;
	port: number;
}

export const appConfig: HttpServiceOptions = {
	host: process.env.APP_HOST ?? '127.0.0.1',
	port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
};

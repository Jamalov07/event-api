import { registerAs } from '@nestjs/config';

declare interface JwtServiceOptions {
	accessKey: string;
	accessTime: string;
	refreshKey: string;
	refreshTime: string;
}

export const jwtConfig = registerAs<JwtServiceOptions>('jwt', () => ({
	accessKey: process.env.ACCESS_KEY,
	refreshKey: process.env.REFRESH_KEY,
	accessTime: process.env.ACCESS_TIME,
	refreshTime: process.env.REFRESH_TIME,
}));

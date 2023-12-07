import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './configs';
import { AuthModule, EventModule, LocationModule, UserModule } from './modules';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig],
		}),
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				...configService.get('database'),
			}),
		}),
		AuthModule,
		EventModule,
		LocationModule,
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

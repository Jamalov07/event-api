import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule,
		forwardRef(() => UserModule),
		JwtModule.register({
			global: true,
		}),
	],
	providers: [AuthService],
	controllers: [AuthController],
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { UserCreateDtoRequest, UserService } from '../user';
import { JwtService } from '@nestjs/jwt';
import { JwtSignPayload, Tokens } from './interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly jwtService: JwtService, private readonly configService: ConfigService) {}

	async userSignUp(payload: UserCreateDtoRequest): Promise<Tokens> {
		const user = await this.userService.userCreate(payload);
		const tokens = await this.generateTokens({ id: user.id });
		return tokens;
	}

	async userSignIn() {
		return 2;
	}

	async generateTokens(payload: JwtSignPayload): Promise<Tokens> {
		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(payload, { secret: this.configService.get('jwt.accessKey'), expiresIn: this.configService.get('jwt.accessTime') }),
			this.jwtService.signAsync(payload, { secret: this.configService.get('jwt.refreshKey'), expiresIn: this.configService.get('jwt.refreshTime') }),
		]);
		return { accessToken, refreshToken };
	}
}

import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '../../decorators';
import { DecodedToken } from './dtos';
import { AuthService } from './auth.service';
import { UserCreateDtoRequest } from '../user';
import { Tokens } from './interfaces';

@Controller('auth')
export class AuthController {
	readonly #_service: AuthService;
	constructor(service: AuthService) {
		this.#_service = service;
	}

	@HttpCode(HttpStatus.OK)
	@Post('sign-up')
	eventCreate(@Body() body: UserCreateDtoRequest, @User() user: DecodedToken): Promise<Tokens> {
		return this.#_service.userSignUp({ ...body, user });
	}
}

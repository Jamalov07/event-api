import { IsNotEmpty, IsNumber } from 'class-validator';
import { UserDeleteRequest } from '../interfaces';

export class UserDeleteDtoRequest implements UserDeleteRequest {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsNumber()
	@IsNotEmpty()
	userId: number;
}

import { IsNotEmpty, IsUUID } from 'class-validator';
import { UserDeleteRequest } from '../interfaces';

export class UserDeleteDtoRequest implements UserDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: number;

	@IsUUID('4')
	@IsNotEmpty()
	userId: number;
}

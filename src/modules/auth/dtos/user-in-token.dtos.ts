import { IsNotEmpty, IsNumber } from 'class-validator';
import { JwtSignPayload } from '../interfaces';

export class DecodedToken implements JwtSignPayload {
	@IsNumber()
	@IsNotEmpty()
	id: number;
}

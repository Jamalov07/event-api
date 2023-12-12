import { JwtSignPayload } from '../../auth/interfaces';

export declare interface UserCreateRequest {
	fullName: string;
	password: string;
	phoneNumber: string;
	email: string;
	user: JwtSignPayload;
}

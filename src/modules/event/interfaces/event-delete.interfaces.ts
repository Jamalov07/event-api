import { JwtSignPayload } from '../../auth/interfaces';

export declare interface EventDeleteRequest {
	id: number;
	user: JwtSignPayload;
}

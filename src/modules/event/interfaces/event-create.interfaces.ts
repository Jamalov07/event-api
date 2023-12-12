import { JwtSignPayload } from '../../auth/interfaces';

export declare interface EventCreateRequest {
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	locationId?: number;
	user: JwtSignPayload;
}

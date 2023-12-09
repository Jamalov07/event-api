import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UserService } from '../modules';

@Injectable()
export class RemoveEmptyKeysInterceptor implements NestInterceptor {
	readonly user: UserService;
	async intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Promise<Observable<any>> {
		const request = context.switchToHttp().getRequest<Request>();

		request.body = Object.fromEntries(
			Object.keys(request.body).map((key) => {
				if (![null, undefined].includes(request.body[key])) {
					return [key, request.body[key]];
				}
			}),
		);

		request.query = Object.fromEntries(
			Object.keys(request.query).map((key) => {
				if (![null, undefined].includes(request.query[key])) {
					return [key, request.query[key]];
				}
			}),
		);

		return next.handle();
	}
}

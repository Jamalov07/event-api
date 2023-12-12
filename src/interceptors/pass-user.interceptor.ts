import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UserService } from '../modules';

@Injectable()
export class PassUserIdInterceptor implements NestInterceptor {
	readonly user: UserService;
	async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
		const request = context.switchToHttp().getRequest<Request>();

		Object.assign(request.body, { user: { id: 1 } });
		return next.handle();
	}
}

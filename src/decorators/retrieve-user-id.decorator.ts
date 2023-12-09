import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserIdRetrieve = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		return { id: request.body.userId };
	},
);

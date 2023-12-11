import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserIdRetrieve = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest();
	return { userId: request.body.userId };
});

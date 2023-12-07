import { json } from 'express';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { appConfig } from './configs';

setImmediate(async (): Promise<void> => {
	const app = await NestFactory.create<INestApplication>(AppModule, {
		cors: true,
	});
	const config = new DocumentBuilder().build();
	app.use(json({ limit: '50mb' }));

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	console.log(appConfig);
	await app.listen(appConfig.port, appConfig.host);
});
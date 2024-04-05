import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './infrastructure/common/pipes/validation/validation.pipe'
import { HttpExceptionFilter } from './infrastructure/exceptions/http-exception.filter'
import { EmojiLoggerService } from './infrastructure/logger/logger.service'

async function start() {
	const PORT = process.env.PORT || 3000
	const app = await NestFactory.create(AppModule, {
		logger: new EmojiLoggerService(),
	})
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalFilters(new HttpExceptionFilter())

	const config = new DocumentBuilder()
		.setTitle('Photo-skvot API')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.setGlobalPrefix('api/v1')
	await app.listen(PORT, () => console.log('Service started on port ' + PORT))
}

start()

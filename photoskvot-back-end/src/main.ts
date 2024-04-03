import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './infrastructure/common/pipes/validation/validation.pipe'

async function start() {
	const PORT = process.env.PORT || 3000
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(new ValidationPipe())

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

import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ResponseExceptionDto } from './dto/response-exception'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()
		const request = ctx.getRequest<Request>()
		const status = exception.getStatus()

		response
			.status(status)
			.json(
				new ResponseExceptionDto(
					status,
					new Date().toISOString(),
					request.url,
					exception.message,
					exception?.details
				)
			)
	}
}

import { ApiProperty } from '@nestjs/swagger'
import {
	IFormatExceptionMessage,
	IFormatValidationExceptionMessage,
} from 'src/domain/exceptions/exceptions.interface'

export class ResponseExceptionDto implements IFormatExceptionMessage {
	@ApiProperty({ description: 'Status code', example: '400' })
	statusCode: number
	@ApiProperty({ description: 'Time', example: '2024-04-05T18:21:30.679Z' })
	timestamp: string
	@ApiProperty({ description: 'Path', example: '/api/v1/auth/login' })
	path: string
	@ApiProperty({ description: 'Message', example: 'Ошибка валидации!' })
	message: string
	@ApiProperty({
		description: 'Details',
		example: [
			{
				field: 'name',
				message: 'Не является строкой!',
			},
		],
	})
	details: IFormatValidationExceptionMessage[]

	constructor(statusCode, timestamp, path, message, details = null) {
		this.statusCode = statusCode
		this.timestamp = timestamp
		this.path = path
		this.message = message
		this.details = details
	}
}

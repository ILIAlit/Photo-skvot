import { ApiProperty } from '@nestjs/swagger'
import { IFormatValidationExceptionMessage } from 'src/domain/exceptions/exceptions.interface'

export class DetailErrorValidation
	implements IFormatValidationExceptionMessage
{
	@ApiProperty({ description: 'Validation object', example: 'file' })
	field: string
	@ApiProperty({
		description: 'Validation err message',
		example: 'file required error!',
	})
	message: string

	constructor(field: string, message: string) {
		this.field = field
		this.message = message
	}
}

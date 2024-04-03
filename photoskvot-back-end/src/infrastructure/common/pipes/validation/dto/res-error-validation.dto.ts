import { ApiOperation, ApiProperty } from '@nestjs/swagger'

export class ResponseErrorValidation {
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

import { ApiProperty } from '@nestjs/swagger'

export class ResponseErrorAuthDto {
	@ApiProperty({
		description: 'error message',
		example: 'user is not authorized',
	})
	message: string
	constructor(message: string) {
		this.message = message
	}
}

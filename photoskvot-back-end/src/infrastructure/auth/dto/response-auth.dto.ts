import { ApiProperty } from '@nestjs/swagger'

export class ResponseAuthDto {
	@ApiProperty({
		description: 'token',
		nullable: false,
		example: 'tokenExample',
	})
	token: string
}

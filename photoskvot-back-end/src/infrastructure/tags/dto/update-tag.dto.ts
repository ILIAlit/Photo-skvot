import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdateTagDto {
	@ApiProperty({
		description: 'tag type',
		example: 'photo',
	})
	@IsString({ message: 'Не является строкой!' })
	type: string
}

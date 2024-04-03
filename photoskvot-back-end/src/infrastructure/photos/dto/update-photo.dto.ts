import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdatePhotoDto {
	@ApiProperty({
		description: 'alternative text',
		example: 'alternative text example',
	})
	@IsString({ message: 'Не является строкой!' })
	alt: string
}

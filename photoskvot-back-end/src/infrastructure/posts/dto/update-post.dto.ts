import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdatePostDto {
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'post title',
		example: 'post 1',
	})
	title: string

	@ApiProperty({
		description: 'post description',
		example: 'post 1 description',
	})
	@IsString({ message: 'Не является строкой!' })
	description: string
}

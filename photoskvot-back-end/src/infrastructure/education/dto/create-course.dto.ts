import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateCourseDto {
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'course title',
		example: 'course 1',
	})
	title: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'course description',
		example: 'course 1 for photographers',
	})
	description: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'course price',
		example: 'free',
	})
	price: string
}

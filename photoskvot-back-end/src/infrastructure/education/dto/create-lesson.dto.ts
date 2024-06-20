import { ApiProperty } from '@nestjs/swagger'
import { IsNumberString, IsString } from 'class-validator'

export class CreateLessonDto {
	// @IsString({ message: 'Не является строкой!' })
	// @ApiProperty({
	// 	description: 'lesson title',
	// 	example: 'lesson 1',
	// })
	// title: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'lesson text',
		example: 'lesson 1 for photographers',
	})
	text: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'video link',
		example: 'link',
	})
	videoLink: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'material link',
		example: 'link',
	})
	materialLink: string

	@IsNumberString({}, { message: 'Не является числом!' })
	@ApiProperty({
		description: 'course id',
		example: '0',
	})
	courseId: string
}

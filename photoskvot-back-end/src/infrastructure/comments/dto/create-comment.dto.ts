import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateCommentDto {
	@IsNumber({}, { message: 'Не является числом!' })
	@ApiProperty({
		description: 'post id',
		nullable: false,
		example: 0,
	})
	postId: number
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'comment',
		nullable: false,
		example: 'my comment🎅',
	})
	text: string
}

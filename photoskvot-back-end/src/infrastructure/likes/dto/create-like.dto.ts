import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class CreateLikeDto {
	@IsNumber({}, { message: 'Не является числом!' })
	@ApiProperty({
		description: 'post id',
		nullable: false,
		example: 0,
	})
	postId: number
}

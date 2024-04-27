import { ApiProperty } from '@nestjs/swagger'

export class Favorite {
	@ApiProperty({
		description: 'id',
		nullable: false,
		example: 0,
	})
	id: number
	@ApiProperty({
		description: 'post_id',
		nullable: false,
		example: 0,
	})
	post_id: number
	@ApiProperty({
		description: 'user_id',
		nullable: false,
		example: 0,
	})
	user_id: number
}

import { ApiProperty } from '@nestjs/swagger'

export class Post {
	@ApiProperty({
		description: 'id',
		nullable: false,
		example: 0,
	})
	id: number
	@ApiProperty({
		description: 'title',
		nullable: false,
		example: 'title-example',
	})
	title: string
	@ApiProperty({
		description: 'description',
		nullable: true,
		example: 'description-example',
	})
	description: string
}

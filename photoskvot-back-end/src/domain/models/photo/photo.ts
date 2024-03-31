import { ApiProperty } from '@nestjs/swagger'

export class Photo {
	@ApiProperty({
		description: 'id',
		nullable: false,
		example: 0,
	})
	id: number
	@ApiProperty({
		description: 'alt',
		nullable: false,
		example: 'alternative text',
	})
	alt: string
	@ApiProperty({
		description: 'src',
		nullable: false,
		example: 'image url',
	})
	src: string
}

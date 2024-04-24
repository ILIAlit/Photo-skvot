import { ApiProperty } from '@nestjs/swagger'

export class Tag {
	@ApiProperty({
		description: 'id',
		nullable: false,
		example: 0,
	})
	id: number
	@ApiProperty({
		description: 'type',
		nullable: false,
		example: 'photo',
	})
	type: string
}

import { ApiProperty } from '@nestjs/swagger'

export class ResLikeDto {
	constructor(isLiked: boolean = false) {
		this.isLiked = isLiked
	}

	@ApiProperty({
		description: 'is liked',
		nullable: false,
		example: 'true',
	})
	isLiked: boolean
}

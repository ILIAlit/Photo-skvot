import { ApiProperty } from '@nestjs/swagger'

export class ResFavoriteDto {
	constructor(isFavorite: boolean = false) {
		this.isFavorite = isFavorite
	}

	@ApiProperty({
		description: 'is favorite',
		nullable: false,
		example: 'true',
	})
	isFavorite: boolean
}

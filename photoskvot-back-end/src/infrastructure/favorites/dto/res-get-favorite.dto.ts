import { ApiProperty } from '@nestjs/swagger'
import { Favorite } from 'src/domain/models/favorite/favorite'
import { Post } from 'src/domain/models/post/post'

export class ResGetFavoriteDto extends Favorite {
	@ApiProperty({
		description: 'post',
		example: Post,
	})
	post: Post
}

import { ApiProperty } from '@nestjs/swagger'
import { Like } from 'src/domain/models/like/like'
import { Post } from 'src/domain/models/post/post'

export class ResGetLikeDto extends Like {
	@ApiProperty({
		description: 'post',
		example: Post,
	})
	post: Post
}

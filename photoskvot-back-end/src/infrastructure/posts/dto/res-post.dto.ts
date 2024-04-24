import { ApiProperty } from '@nestjs/swagger'
import { Photo } from 'src/domain/models/photo/photo'
import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { Tag } from 'src/domain/models/tag/tag'
import { User } from 'src/domain/models/user/user'

export class ResPostDto {
	constructor(post, postSettings, photo, tags, user) {
		this.id = post.id
		this.title = post.title
		this.description = post.description
		this.photo = post.photo
		this.post_settings = postSettings
		this.user = user
		this.photo = photo
		this.tags = tags
	}

	@ApiProperty({
		description: 'post id',
		example: 0,
	})
	id: number

	@ApiProperty({
		description: 'post title',
		example: 'post 1',
	})
	title: string
	@ApiProperty({
		description: 'post description',
		example: 'post 1 description',
	})
	description: string
	@ApiProperty({
		description: 'post tags',
		example: ['post', 'photo'],
	})
	tags: Tag[]

	@ApiProperty({
		description: 'post settings',
		example: PostSettings,
	})
	post_settings: PostSettings

	@ApiProperty({
		description: 'post photo',
		example: Photo,
	})
	photo: Photo

	@ApiProperty({
		description: 'user',
		example: User,
	})
	user: User
}

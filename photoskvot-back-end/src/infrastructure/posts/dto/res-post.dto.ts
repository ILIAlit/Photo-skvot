import { ApiProperty } from '@nestjs/swagger'
import { Photo } from 'src/domain/models/photo/photo'
import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { User } from 'src/domain/models/user/user'

export class ResPostDto {
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
	// @ApiProperty({
	// 	description: 'post tags',
	// 	example: 'post 1',
	// })
	// tags: Array<string>

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

import { ApiProperty } from '@nestjs/swagger'
import { CreatePostSettingDto } from 'src/infrastructure/post-settings/dto/create-post-setting.dto'

export class ReqPostDto {
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
		example: CreatePostSettingDto,
	})
	settings: CreatePostSettingDto
}

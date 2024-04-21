import { ApiProperty } from '@nestjs/swagger'
import { plainToClass, Transform, Type } from 'class-transformer'
import { IsString, ValidateNested } from 'class-validator'
import { CreatePostSettingDto } from 'src/infrastructure/post-settings/dto/create-post-setting.dto'

export class ReqPostDto {
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'post title',
		example: 'post 1',
	})
	title: string

	@ApiProperty({
		description: 'post description',
		example: 'post 1 description',
	})
	@IsString({ message: 'Не является строкой!' })
	description: string

	@ApiProperty({
		description: 'post tags',
		example: ['photo', 'city'],
	})
	tags: Array<string>

	@ApiProperty({
		description: 'post settings',
		example: CreatePostSettingDto,
	})
	@ValidateNested({ each: true })
	@Transform(({ value }) =>
		plainToClass(CreatePostSettingDto, JSON.parse(value))
	)
	@Type(() => CreatePostSettingDto)
	settings: CreatePostSettingDto
}

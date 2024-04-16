import { IsNumber, IsString } from 'class-validator'

export class CreatePostSettingDto {
	@IsNumber({}, { message: 'Не является строкой!' })
	iso: number
	@IsString({ message: 'Не является строкой!' })
	shutter_speed: string
	@IsString({ message: 'Не является строкой!' })
	aperture: string
	@IsString({ message: 'Не является строкой!' })
	instrument: string
	@IsString({ message: 'Не является строкой!' })
	postId: number
}

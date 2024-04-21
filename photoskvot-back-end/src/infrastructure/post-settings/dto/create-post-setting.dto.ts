import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePostSettingDto {
	@ApiProperty({
		description: 'iso',
		nullable: true,
		example: 250,
	})
	@IsNumber({}, { message: 'Не является числом!' })
	iso: number

	@ApiProperty({
		description: 'shutter speed',
		nullable: true,
		example: '1/500',
	})
	@IsString({ message: 'Не является строкой!' })
	shutter_speed: string

	@ApiProperty({
		description: 'aperture',
		nullable: true,
		example: 'f/16',
	})
	@IsString({ message: 'Не является строкой!' })
	aperture: string

	@ApiProperty({
		description: 'instrument',
		nullable: true,
		example: 'Canon EOS R6',
	})
	@IsString({ message: 'Не является строкой!' })
	instrument: string
}

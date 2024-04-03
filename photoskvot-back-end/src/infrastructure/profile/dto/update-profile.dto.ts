import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdateProfileDto {
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'profile status',
		nullable: true,
		example: 'example-profile-status',
	})
	status: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'profile bio',
		nullable: true,
		example: 'example-profile-bio',
	})
	about: string

	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'profile social link',
		nullable: true,
		example: 'example-profile-social-link',
	})
	social_link: string
}

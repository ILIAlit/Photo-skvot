import { ApiProperty } from '@nestjs/swagger'

export class UpdateProfileDto {
	@ApiProperty({
		description: 'profile avatar',
		nullable: true,
		example: 'example-profile-avatar-link',
	})
	avatar: string

	@ApiProperty({
		description: 'profile status',
		nullable: true,
		example: 'example-profile-status',
	})
	status: string

	@ApiProperty({
		description: 'profile bio',
		nullable: true,
		example: 'example-profile-bio',
	})
	about: string

	@ApiProperty({
		description: 'profile social link',
		nullable: true,
		example: 'example-profile-social-link',
	})
	social_link: string
}

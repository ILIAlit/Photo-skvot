import { ApiProperty } from '@nestjs/swagger'

export class Profile {
	@ApiProperty({ description: 'profile id', nullable: false, example: 0 })
	id: number
	@ApiProperty({
		description: 'profile avatar',
		nullable: true,
		example: 'imageUrl',
	})
	avatar: string
	@ApiProperty({
		description: 'profile status',
		nullable: true,
		example: 'designer',
	})
	status: string
	@ApiProperty({
		description: 'profile about',
		nullable: true,
		example: 'about me',
	})
	about: string
	@ApiProperty({
		description: 'profile social link',
		nullable: true,
		example: 'exampleSocialLink',
	})
	social_link: string
}

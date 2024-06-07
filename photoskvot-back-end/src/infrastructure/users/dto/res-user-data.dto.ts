import { ApiProperty } from '@nestjs/swagger'
import { Profile } from 'src/domain/models/profile/profile'

export class ResUserData {
	@ApiProperty({ description: 'User id', example: 0 })
	id: number
	@ApiProperty({ description: 'User profile', example: Profile })
	profile: Profile
	@ApiProperty({ description: 'User name', example: 'My name' })
	name: string
}

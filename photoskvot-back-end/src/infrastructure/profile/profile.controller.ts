import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Profile } from 'src/domain/models/profile/profile'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ProfileService } from './profile.service'

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
	constructor(private readonly profileService: ProfileService) {}

	@Get()
	@ApiOperation({ summary: 'Get user profile' })
	@ApiResponse({ status: 200, type: Profile })
	@UseGuards(JwtAuthGuard)
	async getProfile(@Req() request: IGetUserAuthInfoRequest): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.getProfile(userId)
	}
}

import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Profile } from 'src/domain/models/profile/profile'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ProfileService } from './profile.service'

@Controller('profile')
export class ProfileController {
	constructor(private readonly profileService: ProfileService) {}

	@Get()
	@UseGuards(JwtAuthGuard)
	async getProfile(@Req() request: IGetUserAuthInfoRequest): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.getProfile(userId)
	}
}

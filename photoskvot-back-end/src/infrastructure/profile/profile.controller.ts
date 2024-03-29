import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Profile } from 'src/domain/models/profile/profile'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { ProfileService } from './profile.service'

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
	constructor(private readonly profileService: ProfileService) {}

	@ApiOperation({ summary: 'Get user profile' })
	@ApiResponse({ status: 200, type: Profile })
	@UseGuards(JwtAuthGuard)
	@Get()
	async getProfile(@Req() request: IGetUserAuthInfoRequest): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.getProfile(userId)
	}

	@ApiOperation({ summary: 'Update user profile' })
	@ApiResponse({ status: 200, type: Profile })
	@UseGuards(JwtAuthGuard)
	@Patch('update')
	async updateProfile(
		@Req() request: IGetUserAuthInfoRequest,
		@Body() updateProfileDto: UpdateProfileDto
	): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.updateProfile(updateProfileDto, userId)
	}
}

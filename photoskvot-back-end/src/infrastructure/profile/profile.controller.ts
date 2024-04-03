import {
	Body,
	Controller,
	Get,
	Patch,
	Req,
	UploadedFile,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Profile } from 'src/domain/models/profile/profile'
import { ResponseErrorAuthDto } from '../auth/dto/response-error-auth.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ResponseErrorValidation } from '../common/pipes/validation/dto/res-error-validation.dto'
import { ImgFileTypeValidationPipe } from '../common/pipes/validation/img-file-type-validation.pipe'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { ProfileService } from './profile.service'

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
	constructor(private readonly profileService: ProfileService) {}

	@ApiOperation({ summary: 'Get user profile' })
	@ApiResponse({ status: 200, type: Profile })
	@ApiResponse({ status: 401, type: ResponseErrorAuthDto })
	@UseGuards(JwtAuthGuard)
	@Get()
	async findOne(@Req() request: IGetUserAuthInfoRequest): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.getProfile(userId)
	}

	@ApiOperation({ summary: 'Update user profile' })
	@ApiResponse({ status: 200, type: Profile })
	@ApiResponse({ status: 400, type: ResponseErrorValidation })
	@ApiResponse({ status: 401, type: ResponseErrorAuthDto })
	@UseGuards(JwtAuthGuard)
	@Patch('update')
	async update(
		@Req() request: IGetUserAuthInfoRequest,
		@Body() updateProfileDto: UpdateProfileDto,
		@UploadedFile(new ImgFileTypeValidationPipe()) avatar: any
	): Promise<Profile> {
		const user = await request.user
		const userId = user.id
		return await this.profileService.updateProfile(updateProfileDto, userId)
	}
}

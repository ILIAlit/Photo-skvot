import { Inject, Injectable } from '@nestjs/common'
import { Profile } from 'src/domain/models/profile/profile'
import { IProfileRepository } from 'src/domain/repositories/profile/profileRepository.interface'
import { UpdateProfileDto } from './dto/update-profile.dto'

@Injectable()
export class ProfileService {
	constructor(
		@Inject('IProfileRepository')
		private readonly profileRepository: IProfileRepository
	) {}

	async getProfile(userId: number): Promise<Profile> {
		return await this.profileRepository.getProfile(userId)
	}

	async createProfile(): Promise<Profile> {
		return await this.profileRepository.createProfile()
	}

	async updateProfile(
		updateProfileDto: UpdateProfileDto,
		userId: number
	): Promise<Profile> {
		return await this.profileRepository.updateProfile(updateProfileDto, userId)
	}
}

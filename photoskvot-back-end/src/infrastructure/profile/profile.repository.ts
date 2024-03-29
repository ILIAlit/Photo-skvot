import { Inject } from '@nestjs/common'
import { Profile } from 'src/domain/models/profile/profile'
import { IProfileRepository } from 'src/domain/repositories/profile/profileRepository.interface'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { ProfileEntity } from './entity/profile'

export class ProfileRepository implements IProfileRepository {
	constructor(
		@Inject('Profile') private readonly profile: typeof ProfileEntity
	) {}
	async getProfile(userId: number): Promise<Profile> {
		return await this.profile.findOne({
			where: { user_id: userId },
		})
	}
	async createProfile(): Promise<Profile> {
		return await this.profile.create<ProfileEntity>()
	}
	async updateProfile(
		updateProfileDto: UpdateProfileDto,
		userId: number
	): Promise<Profile> {
		const [updateRow, updateData] = await this.profile.update<ProfileEntity>(
			{ ...updateProfileDto },
			{
				where: { user_id: userId },
				returning: true,
			}
		)
		return updateData[0]
	}
}

import { Inject } from '@nestjs/common'
import { Profile } from 'src/domain/models/profile/profile'
import { IProfileRepository } from 'src/domain/repositories/profile/profileRepository.interface'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { ProfileEntity } from './entity/profile.entity'

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
		userId: number,
		avatar: string
	): Promise<Profile> {
		const [updateRow, updateData] = await this.profile.update<ProfileEntity>(
			{ ...updateProfileDto, avatar },
			{
				where: { user_id: userId },
				returning: true,
			}
		)
		return updateData[0]
	}
}

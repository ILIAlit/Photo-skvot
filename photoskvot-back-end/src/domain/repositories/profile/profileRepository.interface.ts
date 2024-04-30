import { Profile } from 'src/domain/models/profile/profile'
import { UpdateProfileDto } from 'src/infrastructure/profile/dto/update-profile.dto'

export interface IProfileRepository {
	getProfile(userId: number): Promise<Profile>
	createProfile(): Promise<Profile>
	updateProfile(
		updateProfileDto: UpdateProfileDto,
		userId: number,
		avatar: string
	): Promise<Profile>
}

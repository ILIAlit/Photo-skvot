import { Profile } from 'src/domain/models/profile/profile'

export interface IProfileRepository {
	getProfile(userId: number): Promise<Profile>
	createProfile(): Promise<Profile>
	updateProfile(updateProfileDto: number): Promise<Profile>
}

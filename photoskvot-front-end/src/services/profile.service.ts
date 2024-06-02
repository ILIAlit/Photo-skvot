import { axiosWithAuth } from '@/api/interceptors'
import { IProfile, IProfileForm } from '@/types/profile.types'

class ProfileService {
	async update(data: FormData) {
		const response = await axiosWithAuth.patch<IProfileForm>('profile', data)
		return response
	}

	async getUserAuthProfile() {
		const response = await axiosWithAuth.get<IProfile>('profile')
		return response
	}
}

export const profileService = new ProfileService()

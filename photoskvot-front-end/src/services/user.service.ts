import { axiosClassic } from '@/api/interceptors'
import { IResUserData } from '@/types/user.types'

class UserService {
	async getUserData(userId: number) {
		const response = await axiosClassic.get<IResUserData>(
			'users/get-user-data',
			{ params: { userId } }
		)
		return response
	}
}

export const userService = new UserService()

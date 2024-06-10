import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { IResUserData, IUser } from '@/types/user.types'

class UserService {
	async getUserData(userId: number) {
		const response = await axiosClassic.get<IResUserData>(
			'users/get-user-data',
			{ params: { userId } }
		)
		return response
	}

	async getAllUser() {
		const response = await axiosWithAuth.get<IUser[]>('users')
		return response
	}
}

export const userService = new UserService()

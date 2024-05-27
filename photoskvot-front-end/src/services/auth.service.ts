import { axiosClassic } from '@/api/interceptors'
import { IAuthResponse, ILoginForm, IRegisterForm } from '@/types/auth.types'
import { removeTokenStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>('auth/login', data)
		if (response.data.token) {
			saveTokenStorage(response.data.token)
		}
		return response
	}

	async register(data: IRegisterForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			'auth/register',
			data
		)
		if (response.data.token) {
			saveTokenStorage(response.data.token)
		}
		return response
	}

	async logout() {
		removeTokenStorage()
	}
}

export const authService = new AuthService()

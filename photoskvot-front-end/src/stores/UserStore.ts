import { decodeToken } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
import { ILoginForm, IRegisterForm } from '@/types/auth.types'
import { IUser } from '@/types/user.types'
import { makeAutoObservable } from 'mobx'

class UserStore {
	private isAuth: boolean = false
	private user: IUser | null = null

	constructor() {
		makeAutoObservable(this)
	}

	get isUserAuth(): boolean {
		return this.isAuth
	}

	get userAuth(): IUser | null {
		return this.user
	}

	setUserAuth(user: IUser) {
		this.user = user
	}

	setIsUserAuth(value: boolean) {
		this.isAuth = value
	}

	logout(): void {
		this.isAuth = false
		this.user = null
		authService.logout()
	}

	async register(data: IRegisterForm) {
		const response = await authService.register(data)
		const token = response.data.token
		if (!token) {
			return
		}
		const user = decodeToken(token)
		this.setUserAuth(user)
		this.setIsUserAuth(true)
		return response
	}

	async login(data: ILoginForm) {
		const response = await authService.login(data)
		const token = response.data.token
		if (!token) {
			return
		}
		const user = decodeToken(token)
		this.setUserAuth(user)
		this.setIsUserAuth(true)
		return response
	}
}

export default new UserStore()

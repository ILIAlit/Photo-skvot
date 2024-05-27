import { IUser } from '@/types/user.types'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export const getToken = () => {
	const token = Cookies.get('token')
	return token
}

export const saveTokenStorage = (token: string) => {
	Cookies.set('token', token, {
		sameSite: 'strict',
		expires: 1,
	})
}

export const removeTokenStorage = () => {
	Cookies.remove('token')
}

export const decodeToken = (token: string): IUser => {
	return jwtDecode(token)
}

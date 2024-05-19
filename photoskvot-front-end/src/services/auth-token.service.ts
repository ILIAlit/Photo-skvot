import Cookies from 'js-cookie'

export const getToken = () => {
	const token = Cookies.get('token')
	return token || null
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

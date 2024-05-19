import { getToken, removeTokenStorage } from '@/services/auth-token.service'
import axios, { CreateAxiosDefaults } from 'axios'
import { PUBLIC_PAGES } from '../config/public-pages-url.config'

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL + 'api/v1/',
}

const axiosClassic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const token = getToken()
	if (config?.headers && token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async err => {
		const token = getToken()
		if (err.response.status === 401 && token) {
			try {
				window.location.href = PUBLIC_PAGES.LOGIN
				removeTokenStorage()
				return Promise.reject(err)
			} catch (err) {
				console.log(err)
				return Promise.reject(err)
			}
		}
		throw err
	}
)

export { axiosClassic, axiosWithAuth }

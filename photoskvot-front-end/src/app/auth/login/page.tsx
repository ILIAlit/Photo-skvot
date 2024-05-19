import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Login from './Login'

export const metadata = {
	title: 'Логин',
	...NO_INDEX_PAGE,
}

export default function LoginPage() {
	return <Login />
}

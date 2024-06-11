import { axiosWithAuth } from '@/api/interceptors'

class AdminService {
	async banUser(id: number) {
		const response = await axiosWithAuth.get('users/ban-user', {
			params: { id },
		})
		return response
	}
}

export const adminService = new AdminService()

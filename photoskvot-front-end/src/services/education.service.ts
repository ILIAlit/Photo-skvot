import { axiosWithAuth } from '@/api/interceptors'
import { ICommentForm } from '@/types/comment.types'

class EducationService {
	async getCourses() {
		const response = await axiosWithAuth.get('education/find-all-courses')
		return response
	}
}

export const educationService = new EducationService()

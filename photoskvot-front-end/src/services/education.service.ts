import { axiosWithAuth } from '@/api/interceptors'

class EducationService {
	async getCourses() {
		const response = await axiosWithAuth.get('education/find-all-courses')
		return response
	}

	async getUserCourses() {
		const response = await axiosWithAuth.get('education/find-user-courses')
		return response
	}

	async startCourse(courseId: number) {
		const response = await axiosWithAuth.get('education/start-course', {
			params: { courseId },
		})
		return response
	}
}

export const educationService = new EducationService()

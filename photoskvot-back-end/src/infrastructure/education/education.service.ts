import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { IEducationRepository } from 'src/domain/repositories/education/educationRepository'
import { CloudinaryService } from '../services/cloudinary/cloudinary.service'
import { UsersService } from '../users/users.service'
import { CreateCourseDto } from './dto/create-course.dto'
import { CreateLessonDto } from './dto/create-lesson.dto'

@Injectable()
export class EducationService {
	constructor(
		@Inject('IEducationRepository')
		private readonly educationRepository: IEducationRepository,
		private readonly cloudinary: CloudinaryService,
		private readonly userService: UsersService
	) {}
	async createCourse(createCourseDto: CreateCourseDto) {
		return await this.educationRepository.createCourse(createCourseDto)
	}

	async createLesson(createLessonDto: CreateLessonDto, image: any) {
		let imageSrc = null
		if (image) {
			const resImgUploaded = await this.cloudinary.uploadImage(image)
			imageSrc = resImgUploaded.url
		}
		return await this.educationRepository.createLesson(
			createLessonDto,
			imageSrc
		)
	}

	async findAllCourses() {
		return await this.educationRepository.getCourses()
	}

	async findOneCourse(courseId: number, userId: number) {
		const userCourse = this.educationRepository.checkIsUserCourse(
			userId,
			courseId
		)
		if (!userCourse) {
			throw new HttpException(
				'У вас нет доступа к данному курсу!',
				HttpStatus.FORBIDDEN
			)
		}
		return await this.educationRepository.getOneCourse(courseId)
	}

	async findOneLesson(courseId: number, lessonId: number, userId: number) {
		const userCourse = this.educationRepository.checkIsUserCourse(
			userId,
			courseId
		)
		if (!userCourse) {
			throw new HttpException(
				'У вас нет доступа к данному курсу!',
				HttpStatus.FORBIDDEN
			)
		}
		return await this.educationRepository.getOneLesson(courseId, lessonId)
	}

	async findUserCourses(userId: number) {
		return await this.educationRepository.getUserCourses(userId)
	}

	async startCourse(userId: number, courseId: number) {
		const user = await this.userService.getUserEntityById(userId)
		const userCourses = await this.findUserCourses(user.id)
		const userStartedCourse = await this.educationRepository.checkIsUserCourse(
			user.id,
			courseId
		)
		if (userStartedCourse) {
			throw new HttpException('У вас уже есть этот курс!', HttpStatus.FORBIDDEN)
		}
		if (!userCourses.length) {
			await user.$set('courses', [courseId])
			return userCourses
		}
		await user.$add('courses', [courseId])
		return userCourses
	}

	remove(id: number) {
		return `This action removes a #${id} education`
	}
}

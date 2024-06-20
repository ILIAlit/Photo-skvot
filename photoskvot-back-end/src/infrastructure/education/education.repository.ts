import { Inject } from '@nestjs/common'
import { IEducationRepository } from 'src/domain/repositories/education/educationRepository'
import { UserEntity } from '../users/entity/user.entity'
import { CreateCourseDto } from './dto/create-course.dto'
import { CreateLessonDto } from './dto/create-lesson.dto'
import { CourseEntity } from './entities/course.entity'
import { LessonEntity } from './entities/lesson.entity'

export class EducationRepository implements IEducationRepository {
	constructor(
		@Inject('Course') private readonly course: typeof CourseEntity,
		@Inject('Lesson') private readonly lesson: typeof LessonEntity
	) {}
	async createCourse(createCourseDto: CreateCourseDto) {
		return await this.course.create<CourseEntity>({ ...createCourseDto })
	}
	async getCourses() {
		return await this.course.findAll<CourseEntity>()
	}

	async getOneCourse(courseId: number) {
		return await this.course.findOne<CourseEntity>({
			include: [LessonEntity],
			where: { id: courseId },
		})
	}

	async getUserCourses(userId: number) {
		return await this.course.findAll<CourseEntity>({
			include: [
				{
					model: UserEntity,
					where: { id: userId },
				},
			],
		})
	}

	async createLesson(createLessonDto: CreateLessonDto, imageSrc: string) {
		return await this.lesson.create<LessonEntity>({
			...createLessonDto,
			course_id: createLessonDto.courseId,
			imgSrc: imageSrc,
		})
	}
	async getCourseLessons(courseId: number) {
		return await this.lesson.findAll<LessonEntity>({
			where: { course_id: courseId },
		})
	}
	async getOneLesson(courseId: number, lessonId: number) {
		return await this.lesson.findOne<LessonEntity>({
			where: { course_id: courseId, id: lessonId },
		})
	}

	async checkIsUserCourse(
		userId: number,
		courseId: number
	): Promise<CourseEntity> {
		return await this.course.findOne<CourseEntity>({
			include: [
				{
					model: UserEntity,
					where: { id: userId },
				},
			],
			where: { id: courseId },
		})
	}
}

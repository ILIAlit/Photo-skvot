import { CreateCourseDto } from 'src/infrastructure/education/dto/create-course.dto'
import { CreateLessonDto } from 'src/infrastructure/education/dto/create-lesson.dto'
import { CourseEntity } from 'src/infrastructure/education/entities/course.entity'
import { LessonEntity } from 'src/infrastructure/education/entities/lesson.entity'

export interface IEducationRepository {
	createCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity>
	getCourses(): Promise<CourseEntity[]>
	getUserCourses(userId: number): Promise<CourseEntity[]>
	getOneCourse(courseId: number): Promise<CourseEntity>
	createLesson(
		createLessonDto: CreateLessonDto,
		imageSrc: string
	): Promise<LessonEntity>
	getCourseLessons(courseId: number): Promise<LessonEntity[]>
	getOneLesson(courseId: number, lessonId: number): Promise<LessonEntity>
	checkIsUserCourse(userId: number, courseId: number): Promise<CourseEntity>
}

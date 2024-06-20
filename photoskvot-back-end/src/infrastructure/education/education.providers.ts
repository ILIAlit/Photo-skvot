import { EducationRepository } from './education.repository'
import { CourseEntity } from './entities/course.entity'
import { LessonEntity } from './entities/lesson.entity'

export const educationProviders = [
	{ provide: 'IEducationRepository', useClass: EducationRepository },
	{ provide: 'Course', useValue: CourseEntity },
	{ provide: 'Lesson', useValue: LessonEntity },
]

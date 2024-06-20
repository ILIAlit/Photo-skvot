import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Query,
	Req,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Roles } from '../auth/decorators/roles-auth.decorator'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RoleGuard } from '../auth/guards/roles.guard'
import { ImgFileTypeValidationPipe } from '../common/pipes/validation/img-file-type-validation.pipe'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { CreateCourseDto } from './dto/create-course.dto'
import { CreateLessonDto } from './dto/create-lesson.dto'
import { EducationService } from './education.service'

@ApiTags('Education')
@Controller('education')
export class EducationController {
	constructor(private readonly educationService: EducationService) {}

	@ApiOperation({ summary: 'Create course' })
	//@ApiResponse({ status: 200, type:  })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Roles('admin')
	@UseGuards(RoleGuard)
	@Post('create-course')
	createCourse(@Body() createCourseDto: CreateCourseDto) {
		return this.educationService.createCourse(createCourseDto)
	}

	@ApiOperation({ summary: 'Create lesson' })
	//@ApiResponse({ status: 200, type:  })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Roles('admin')
	@UseGuards(RoleGuard)
	@UseInterceptors(FileInterceptor('image'))
	@Post('create-lesson')
	createLesson(
		@Body() createLessonDto: CreateLessonDto,
		@UploadedFile(new ImgFileTypeValidationPipe())
		image: any
	) {
		return this.educationService.createLesson(createLessonDto, image)
	}

	@Get('find-all-courses')
	@UseGuards(JwtAuthGuard)
	findAllCourses() {
		return this.educationService.findAllCourses()
	}

	@Get('find-one-course')
	@ApiQuery({ name: 'courseId' })
	@UseGuards(JwtAuthGuard)
	async findOneCourse(
		@Query() { courseId }: any,
		@Req() request: IGetUserAuthInfoRequest
	) {
		const user = await request.user
		const userId = user.id
		return this.educationService.findOneCourse(courseId, userId)
	}

	@Get('find-one-lesson')
	@ApiQuery({ name: 'courseId' })
	@ApiQuery({ name: 'lessonId' })
	@UseGuards(JwtAuthGuard)
	async findOneLesson(
		@Query() { courseId, lessonId }: any,
		@Req() request: IGetUserAuthInfoRequest
	) {
		const user = await request.user
		const userId = user.id
		return this.educationService.findOneLesson(courseId, lessonId, userId)
	}

	@Get('find-user-courses')
	@UseGuards(JwtAuthGuard)
	async findUserCourses(@Req() request: IGetUserAuthInfoRequest) {
		const user = await request.user
		const userId = user.id
		return this.educationService.findUserCourses(userId)
	}

	@Get('start-course')
	@ApiQuery({ name: 'courseId' })
	@UseGuards(JwtAuthGuard)
	async startCourse(
		@Query() { courseId }: any,
		@Req() request: IGetUserAuthInfoRequest
	) {
		const user = await request.user
		const userId = user.id
		return await this.educationService.startCourse(userId, courseId)
	}

	@Delete('delete-course')
	@ApiQuery({ name: 'courseId' })
	@UseGuards(JwtAuthGuard)
	@Roles('admin')
	@UseGuards(RoleGuard)
	removeCourse(@Query() { courseId }: any) {
		return this.educationService.remove(+courseId)
	}
}

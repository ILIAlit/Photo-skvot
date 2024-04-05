import {
	Body,
	Controller,
	Get,
	Patch,
	Query,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Photo } from 'src/domain/models/photo/photo'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { FileRequiredValidationPipe } from '../common/pipes/validation/file-required-validation.pipe'
import { ImgFileTypeValidationPipe } from '../common/pipes/validation/img-file-type-validation.pipe'
import { ApiMultiFormData } from '../common/swagger/decorators/api-form-data.decorator'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { RequestQueryDto } from './dto/request-query.dto'
import { UpdatePhotoDto } from './dto/update-photo.dto'
import { PhotosService } from './photos.service'

@ApiTags('Photo')
@Controller('photos')
export class PhotosController {
	constructor(private readonly photosService: PhotosService) {}

	@ApiOperation({ summary: 'Get all photo' })
	@ApiResponse({ status: 200, type: [Photo] })
	@Get()
	findAll() {
		return this.photosService.findAll()
	}

	@ApiOperation({ summary: 'Get one photo' })
	@ApiResponse({ status: 200, type: Photo })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@Get('get-one')
	findOne(@Query() { postId }: RequestQueryDto) {
		return this.photosService.findOne(+postId)
	}

	@ApiOperation({ summary: 'Update photo' })
	@ApiMultiFormData({
		alt: {
			description: 'alternative text',
			type: 'string',
			example: 'photo',
			nullable: false,
		},
		photo: { description: 'photo file', type: 'file/image', nullable: false },
	})
	@ApiResponse({ status: 200, type: Photo })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Patch()
	@UseInterceptors(FileInterceptor('image'))
	async update(
		@Query() { postId }: RequestQueryDto,
		@Body() updatePhotoDto: UpdatePhotoDto,
		@UploadedFile(
			new FileRequiredValidationPipe(),
			new ImgFileTypeValidationPipe()
		)
		image: any
	) {
		image.tempFilePath
		return await this.photosService.update(+postId, updatePhotoDto, image)
	}
}

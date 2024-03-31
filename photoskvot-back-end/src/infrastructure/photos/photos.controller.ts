import {
	Body,
	Controller,
	Get,
	Patch,
	Query,
	UploadedFile,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Photo } from 'src/domain/models/photo/photo'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
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
	@ApiParam({ name: 'postId' })
	@Get('get-one')
	findOne(@Query('postId') postId: string) {
		return this.photosService.findOne(+postId)
	}

	@ApiOperation({ summary: 'Update photo' })
	@ApiResponse({ status: 200, type: Photo })
	@ApiParam({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Patch()
	update(
		@Query('postId') postId: string,
		@Body() updatePhotoDto: UpdatePhotoDto,
		@UploadedFile() imageFile: any
	) {
		return this.photosService.update(+postId, updatePhotoDto, imageFile)
	}
}

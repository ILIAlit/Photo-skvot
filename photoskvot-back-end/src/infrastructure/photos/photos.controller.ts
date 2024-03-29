import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { UpdatePhotoDto } from './dto/update-photo.dto'
import { PhotosService } from './photos.service'

@Controller('photos')
export class PhotosController {
	constructor(private readonly photosService: PhotosService) {}

	@Get()
	findAll() {
		return this.photosService.findAll()
	}

	@Get(':post-id')
	findOne(@Param('post-id') postId: string) {
		return this.photosService.findOne(+postId)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
		return this.photosService.update(+id, updatePhotoDto)
	}
}

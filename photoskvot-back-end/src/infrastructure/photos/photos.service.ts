import { Inject, Injectable } from '@nestjs/common'
import { Photo } from 'src/domain/models/photo/photo'
import { IPhotoRepository } from 'src/domain/repositories/photo/photoRepository.interface'
import { CloudinaryService } from '../services/cloudinary/cloudinary.service'
import { FilesService } from '../services/files/files.service'
import { CreatePhotoDto } from './dto/create-photo.dto'
import { UpdatePhotoDto } from './dto/update-photo.dto'

@Injectable()
export class PhotosService {
	constructor(
		@Inject('IPhotoRepository')
		private readonly photoRepository: IPhotoRepository,
		private readonly fileService: FilesService,
		private readonly cloudinary: CloudinaryService
	) {}
	async create(dto: CreatePhotoDto, imageFile: any): Promise<Photo> {
		const imageSrc = await this.fileService.createFile(imageFile)
		return await this.photoRepository.createPhoto({ ...dto, src: imageSrc })
	}

	async findAll(): Promise<Photo[]> {
		return await this.photoRepository.getPhotos()
	}

	async findOne(postId: number) {
		return await this.photoRepository.getOnePhoto(postId)
	}

	async update(postId: number, updatePhotoDto: UpdatePhotoDto, imageFile: any) {
		const resImgUploaded = await this.cloudinary.uploadImage(imageFile)
		const imageSrc = resImgUploaded.url
		return await this.photoRepository.updatePhoto(
			updatePhotoDto,
			postId,
			imageSrc
		)
	}
}

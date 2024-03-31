import { Inject } from '@nestjs/common'
import { Photo } from 'src/domain/models/photo/photo'
import { IPhotoRepository } from 'src/domain/repositories/photo/photoRepository.interface'
import { CreatePhotoDto } from './dto/create-photo.dto'
import { UpdatePhotoDto } from './dto/update-photo.dto'
import { PhotoEntity } from './entities/photo.entity'

export class PhotoRepository implements IPhotoRepository {
	constructor(@Inject('Photo') private readonly photo: typeof PhotoEntity) {}
	async getPhotos(): Promise<Photo[]> {
		return await this.photo.findAll<PhotoEntity>()
	}
	async getOnePhoto(postId: number): Promise<Photo> {
		return await this.photo.findOne<PhotoEntity>({
			where: { id: postId },
		})
	}
	async createPhoto(dto: CreatePhotoDto): Promise<Photo> {
		return await this.photo.create<PhotoEntity>({ ...dto })
	}
	async updatePhoto(
		dto: UpdatePhotoDto,
		postId: number,
		imageSrc: string
	): Promise<Photo> {
		const [updateRow, updateData] = await this.photo.update<PhotoEntity>(
			{ ...dto, src: imageSrc },
			{ where: { id: postId }, returning: true }
		)
		return updateData[0]
	}
}

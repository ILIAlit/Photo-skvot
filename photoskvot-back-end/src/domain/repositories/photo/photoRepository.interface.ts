import { Photo } from 'src/domain/models/photo/photo'
import { CreatePhotoDto } from 'src/infrastructure/photos/dto/create-photo.dto'
import { UpdatePhotoDto } from 'src/infrastructure/photos/dto/update-photo.dto'

export interface IPhotoRepository {
	getPhotos(): Promise<Photo[]>
	getOnePhoto(postId: number): Promise<Photo>
	createPhoto(dto: CreatePhotoDto): Promise<Photo>
	updatePhoto(
		dto: UpdatePhotoDto,
		postId: number,
		imageSrc: string
	): Promise<Photo>
}

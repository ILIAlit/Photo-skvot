import { PhotoEntity } from './entities/photo.entity'
import { PhotoRepository } from './photo.repository'

export const photoProviders = [
	{ provide: 'IPhotoRepository', useClass: PhotoRepository },
	{ provide: 'Photo', useValue: PhotoEntity },
]

import { LikeEntity } from './entities/like.entity'
import { LikeRepository } from './likes.repository'

export const likeProviders = [
	{ provide: 'ILikeRepository', useClass: LikeRepository },
	{ provide: 'Like', useValue: LikeEntity },
]

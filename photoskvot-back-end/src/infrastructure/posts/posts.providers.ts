import { PostEntity } from './entities/post.entity'
import { PostRepository } from './posts.repository'

export const postProviders = [
	{ provide: 'IPostRepository', useClass: PostRepository },
	{ provide: 'Post', useValue: PostEntity },
]

import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'

export class CreateTagDto {
	types: string[]
	post: PostEntity
}

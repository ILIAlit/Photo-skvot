import { CreatePostDto } from 'src/infrastructure/posts/dto/create-post.dto'
import { ResPostDto } from 'src/infrastructure/posts/dto/res-post.dto'
import { UpdatePostDto } from 'src/infrastructure/posts/dto/update-post.dto'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'

export interface IPostRepository {
	getPosts(offset: number, limit: number): Promise<PostEntity[]>
	getOnePost(postId: number): Promise<ResPostDto>
	createPost(dto: CreatePostDto, transactionHost: object): Promise<PostEntity>
	updatePost(
		dto: UpdatePostDto,
		postId: number,
		imageSrc: string
	): Promise<ResPostDto>
	deletePost(postId: number): Promise<void>
}

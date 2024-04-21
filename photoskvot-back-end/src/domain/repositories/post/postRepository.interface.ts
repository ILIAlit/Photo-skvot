import { CreatePostDto } from 'src/infrastructure/posts/dto/create-post.dto'
import { ResPostDto } from 'src/infrastructure/posts/dto/res-post.dto'
import { UpdatePostDto } from 'src/infrastructure/posts/dto/update-post.dto'

export interface IPostRepository {
	getPosts(offset: number, limit: number): Promise<ResPostDto[]>
	getOnePost(postId: number): Promise<ResPostDto>
	createPost(dto: CreatePostDto, transactionHost: object): Promise<ResPostDto>
	updatePost(
		dto: UpdatePostDto,
		postId: number,
		imageSrc: string,
		transactionHost: object
	): Promise<ResPostDto>
}

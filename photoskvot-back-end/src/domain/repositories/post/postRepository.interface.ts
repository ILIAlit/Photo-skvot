import { Post } from 'src/domain/models/post/post'
import { CreatePostDto } from 'src/infrastructure/posts/dto/create-post.dto'
import { UpdatePostDto } from 'src/infrastructure/posts/dto/update-post.dto'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'

export interface IPostRepository {
	getPosts(offset: number, limit: number): Promise<PostEntity[]>
	getOnePost(postId: number): Promise<Post>
	createPost(dto: CreatePostDto, transactionHost: object): Promise<PostEntity>
	updatePost(dto: UpdatePostDto, postId: number): Promise<Post>
	deletePost(postId: number): Promise<number>
}

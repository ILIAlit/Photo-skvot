import { Inject } from '@nestjs/common'
import { Post } from 'src/domain/models/post/post'
import { IPostRepository } from 'src/domain/repositories/post/postRepository.interface'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostEntity } from './entities/post.entity'

export class PostRepository implements IPostRepository {
	constructor(@Inject('Post') private readonly post: typeof PostEntity) {}
	async getPosts(offset: number, limit: number): Promise<PostEntity[]> {
		return await this.post.findAll<PostEntity>({
			offset: offset,
			limit: limit,
		})
	}
	async getOnePost(postId: number): Promise<Post> {
		return await this.post.findOne<PostEntity>({
			where: { id: postId },
		})
	}
	async createPost(
		dto: CreatePostDto,
		transactionHost: object
	): Promise<PostEntity> {
		return await this.post.create<PostEntity>(
			{
				title: dto.title,
				description: dto.description,
				user_id: dto.user_id,
			},
			transactionHost
		)
	}
	async updatePost(dto: UpdatePostDto, postId: number): Promise<Post> {
		const [updateRow, updateData] = await this.post.update<PostEntity>(
			{ ...dto },
			{ where: { id: postId }, returning: true }
		)
		return updateData[0]
	}

	async deletePost(postId: number): Promise<number> {
		return await this.post.destroy<PostEntity>({ where: { id: postId } })
	}
}

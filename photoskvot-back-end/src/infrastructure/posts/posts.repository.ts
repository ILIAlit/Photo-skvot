import { Inject } from '@nestjs/common'
import { IPostRepository } from 'src/domain/repositories/post/postRepository.interface'
import { PhotoEntity } from '../photos/entities/photo.entity'
import { PostSettingEntity } from '../post-settings/entities/post-setting.entity'
import { TagEntity } from '../tags/entities/tag.entity'
import { UserEntity } from '../users/entity/user.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { ResPostDto } from './dto/res-post.dto'
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
	async getOnePost(postId: number): Promise<ResPostDto> {
		return await this.post.findOne<PostEntity>({
			include: [UserEntity, PostSettingEntity, PhotoEntity, TagEntity],
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
	async updatePost(
		dto: UpdatePostDto,
		postId: number,
		imageSrc: string
	): Promise<ResPostDto> {
		throw new Error('Method not implemented.')
	}

	async deletePost(postId: number): Promise<void> {}
}

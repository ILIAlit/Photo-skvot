import { Inject } from '@nestjs/common'
import { Post } from 'src/domain/models/post/post'
import { IPostRepository } from 'src/domain/repositories/post/postRepository.interface'
import { PhotoEntity } from '../photos/entities/photo.entity'
import { UserEntity } from '../users/entity/user.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostEntity } from './entities/post.entity'
import { ResPostDto } from './dto/res-post.dto'

export class PostRepository implements IPostRepository {
	constructor(@Inject('Post') private readonly photo: typeof PostEntity) {}
	async getPosts(): Promise<ResPostDto[]> {
		return await this.photo.findAll<PostEntity>({
			include: [PhotoEntity, UserEntity],
		})
	}
	getOnePost(postId: number): Promise<ResPostDto> {
		throw new Error('Method not implemented.')
	}
	async createPost(dto: CreatePostDto): Promise<ResPostDto> {
		return await this.photo.create<PostEntity>({
			title: dto.title,
			description: dto.description,
			user_id: dto.user_id,
		})
	}
	async updatePost(
		dto: UpdatePostDto,
		postId: number,
		imageSrc: string
	): Promise<ResPostDto> {
		throw new Error('Method not implemented.')
	}
}

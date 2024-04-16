import { Inject, Injectable } from '@nestjs/common'
import { IPostRepository } from 'src/domain/repositories/post/postRepository.interface'
import { PhotosService } from '../photos/photos.service'
import { PostSettingsService } from '../post-settings/post-settings.service'
import { ReqPostDto } from './dto/req-post.dto'
import { ResPostDto } from './dto/res-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Injectable()
export class PostsService {
	constructor(
		@Inject('IPostRepository') private readonly postRepository: IPostRepository,
		private readonly photoService: PhotosService,
		private readonly postSettingsService: PostSettingsService
	) {}
	async create(
		reqDto: ReqPostDto,
		image: any,
		userId: number
	): Promise<ResPostDto> {
		const post = await this.postRepository.createPost({
			title: reqDto.title,
			description: reqDto.description,
			user_id: userId,
		})
		const photo = await this.photoService.create(
			{
				alt: reqDto.title,
				postId: post.id,
			},
			image
		)
		const reqPostSettings = reqDto.settings
		const postSettings = await this.postSettingsService.create(reqPostSettings)
		return post
	}

	async findAll(): Promise<ResPostDto[]> {
		return await this.postRepository.getPosts()
	}

	async findOne(id: number) {
		return await this.postRepository.getOnePost(id)
	}

	async update(id: number, updatePostDto: UpdatePostDto, image: any) {}

	async remove(id: number) {}
}

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
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
		private readonly postSettingsService: PostSettingsService,
		@Inject('SEQUELIZE') private readonly sequelize: Sequelize
	) {}
	async create(
		reqDto: ReqPostDto,
		image: any,
		userId: number
	): Promise<ResPostDto> {
		const t = await this.sequelize.transaction()
		const transactionHost = { transaction: t }
		try {
			const post = await this.postRepository.createPost(
				{
					title: reqDto.title,
					description: reqDto.description,
					user_id: userId,
				},
				transactionHost
			)
			const photo = await this.photoService.create(
				{
					alt: reqDto.title,
					postId: post.id,
				},
				image,
				transactionHost
			)
			const reqPostSettingsJson = reqDto.settings
			const reqPostSettings = JSON.parse(reqPostSettingsJson)
			const postSettings =
				await this.postSettingsService.create(reqPostSettings)
			t.commit()
			return post
		} catch (error) {
			t.rollback()
			throw new HttpException(
				'Ошибка создания поста!',
				HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
	}

	async findAll(offset: number, limit: number): Promise<ResPostDto[]> {
		return await this.postRepository.getPosts(offset, limit)
	}

	async findOne(id: number) {
		return await this.postRepository.getOnePost(id)
	}

	async update(id: number, updatePostDto: UpdatePostDto, image: any) {}

	async remove(id: number) {}
}

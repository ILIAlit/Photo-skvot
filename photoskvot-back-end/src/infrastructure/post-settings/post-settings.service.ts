import { Inject, Injectable } from '@nestjs/common'
import { IPostSettingRepository } from 'src/domain/repositories/post-setting/post-setting-Repository.interface'
import { CreatePostSettingDto } from './dto/create-post-setting.dto'
import { UpdatePostSettingDto } from './dto/update-post-setting.dto'

@Injectable()
export class PostSettingsService {
	constructor(
		@Inject('IPostSettingsRepository')
		private readonly postSettingsRepository: IPostSettingRepository
	) {}
	async create(
		dto: CreatePostSettingDto,
		postId: number,
		transactionHost: object
	) {
		return await this.postSettingsRepository.createPostSettings(
			dto,
			postId,
			transactionHost
		)
	}

	async findOne(postId: number) {
		return await this.postSettingsRepository.getPostSetting(postId)
	}

	async update(postId: number, updatePostSettingDto: UpdatePostSettingDto) {
		return await this.postSettingsRepository.updatePostSetting(
			updatePostSettingDto,
			postId
		)
	}
}

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
	create(dto: CreatePostSettingDto) {
		return 'This action adds a new postSetting'
	}

	findOne(postId: number) {
		return `This action returns a #${postId} postSetting`
	}

	update(postId: number, updatePostSettingDto: UpdatePostSettingDto) {
		return `This action updates a #${postId} postSetting`
	}
}

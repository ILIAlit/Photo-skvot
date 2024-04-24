import { Inject } from '@nestjs/common'
import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { IPostSettingRepository } from 'src/domain/repositories/post-setting/post-setting-Repository.interface'
import { CreatePostSettingDto } from './dto/create-post-setting.dto'
import { UpdatePostSettingDto } from './dto/update-post-setting.dto'
import { PostSettingEntity } from './entities/post-setting.entity'

export class PostSettingsRepository implements IPostSettingRepository {
	constructor(
		@Inject('PostSettings')
		private readonly postSettings: typeof PostSettingEntity
	) {}
	async createPostSettings(
		dto: CreatePostSettingDto,
		postId: number,
		transactionHost: object
	): Promise<PostSettings> {
		return await this.postSettings.create<PostSettingEntity>(
			{
				...dto,
				post_id: postId,
			},
			transactionHost
		)
	}
	async getPostSetting(postId: number): Promise<PostSettings> {
		return await this.postSettings.findOne({
			where: { post_id: postId },
		})
	}
	async updatePostSetting(
		dto: UpdatePostSettingDto,
		postId: number
	): Promise<PostSettings> {
		const [updateRow, updateData] =
			await this.postSettings.update<PostSettingEntity>(
				{ ...dto },
				{ where: { post_id: postId }, returning: true }
			)
		return updateData[0]
	}
}

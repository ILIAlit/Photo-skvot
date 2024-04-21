import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { CreatePostSettingDto } from 'src/infrastructure/post-settings/dto/create-post-setting.dto'
import { UpdatePostSettingDto } from 'src/infrastructure/post-settings/dto/update-post-setting.dto'

export interface IPostSettingRepository {
	createPostSettings(
		dto: CreatePostSettingDto,
		postId: number
	): Promise<PostSettings>
	getPostSetting(postId: number): Promise<PostSettings>
	updatePostSetting(
		dto: UpdatePostSettingDto,
		postId: number
	): Promise<PostSettings>
}

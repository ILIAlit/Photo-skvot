import { IsNumberString } from 'class-validator'

export class FindPostTagsQueryDto {
	@IsNumberString({}, { message: 'Неверные данные!' })
	postId: number
}

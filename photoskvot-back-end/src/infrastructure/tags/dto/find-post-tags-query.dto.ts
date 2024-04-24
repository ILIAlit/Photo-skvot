import { IsNumberString } from 'class-validator'

export class FindPostTagsQueryDto {
	@IsNumberString({}, { message: 'Неверные данные!' })
	id: number

	@IsNumberString({}, { message: 'Неверные данные!' })
	offset: number

	@IsNumberString({}, { message: 'Неверные данные!' })
	limit: number
}

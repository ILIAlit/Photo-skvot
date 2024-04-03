import { IsNumberString } from 'class-validator'
export class RequestQueryDto {
	@IsNumberString({}, { message: 'Неверные данные!' })
	postId: number
}

import { IsNumberString } from 'class-validator'

export class ReqQueryDto {
	@IsNumberString({}, { message: 'Не является числом!' })
	postId: number
	@IsNumberString({}, { message: 'Не является числом!' })
	limit: number
	@IsNumberString({}, { message: 'Не является числом!' })
	page: number
}

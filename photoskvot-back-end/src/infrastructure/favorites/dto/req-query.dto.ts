import { IsNumberString } from 'class-validator'

export class ReqQueryDto {
	@IsNumberString({}, { message: 'Не является числом!' })
	postId: number
}

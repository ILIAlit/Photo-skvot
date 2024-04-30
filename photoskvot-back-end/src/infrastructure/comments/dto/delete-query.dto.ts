import { IsNumberString } from 'class-validator'

export class DeleteQueryDto {
	@IsNumberString({}, { message: 'Не является числом!' })
	commentId: number
}

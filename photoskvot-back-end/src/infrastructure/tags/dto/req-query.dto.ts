import { IsNumberString } from 'class-validator'

export class ReqQueryDto {
	@IsNumberString({}, { message: 'Неверные данные!' })
	id: number
}

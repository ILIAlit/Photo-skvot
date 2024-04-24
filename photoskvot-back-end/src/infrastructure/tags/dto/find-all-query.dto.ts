import { IsNumberString } from 'class-validator'

export class FindAllQuery {
	@IsNumberString({}, { message: 'Неверные данные!' })
	limit: number

	@IsNumberString({}, { message: 'Неверные данные!' })
	offset: number
}

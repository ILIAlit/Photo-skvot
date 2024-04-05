import { HttpException, HttpStatus } from '@nestjs/common'
import { IFormatValidationExceptionMessage } from 'src/domain/exceptions/exceptions.interface'
export class ValidationException extends HttpException {
	details

	constructor(response: IFormatValidationExceptionMessage[]) {
		super('Ошибка валидации!', HttpStatus.BAD_REQUEST)
		this.details = response
	}
}

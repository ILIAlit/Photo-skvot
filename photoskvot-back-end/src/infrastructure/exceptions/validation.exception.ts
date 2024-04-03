import { HttpException, HttpStatus } from '@nestjs/common'
import { ResponseErrorValidation } from '../common/pipes/validation/dto/res-error-validation.dto'
export class ValidationException extends HttpException {
	messages

	constructor(response: ResponseErrorValidation[]) {
		super(response, HttpStatus.BAD_REQUEST)
		this.messages = response
	}
}

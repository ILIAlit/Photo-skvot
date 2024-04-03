import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { ValidationException } from '../../../exceptions/validation.exception'
import { ResponseErrorValidation } from './dto/res-error-validation.dto'

@Injectable()
export class FileRequiredValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value) {
			const field = 'file'
			const message = 'Файл отсутствует!'
			throw new ValidationException([
				new ResponseErrorValidation(field, message),
			])
		}
		return value
	}
}

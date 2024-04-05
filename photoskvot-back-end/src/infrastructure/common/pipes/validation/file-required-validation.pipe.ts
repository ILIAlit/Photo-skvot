import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { ValidationException } from 'src/infrastructure/exceptions/validation.exception'

@Injectable()
export class FileRequiredValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value) {
			throw new ValidationException([
				{
					field: 'file',
					message: 'Файл отсутствует!',
				},
			])
		}
		return value
	}
}

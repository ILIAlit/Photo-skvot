import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import {
	ARRAY_OF_ALLOWED_FILE_TYPES,
	ARRAY_OF_ALLOWED_FILES,
} from 'src/domain/constants'
import { ValidationException } from 'src/infrastructure/exceptions/validation.exception'

@Injectable()
export class ImgFileTypeValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value) {
			return value
		}
		const array_of_allowed_files = ARRAY_OF_ALLOWED_FILES
		const array_of_allowed_file_types = ARRAY_OF_ALLOWED_FILE_TYPES
		const file_extension = value.originalname.slice(
			((value.originalname.lastIndexOf('.') - 1) >>> 0) + 2
		)
		if (
			!array_of_allowed_files.includes(file_extension) ||
			!array_of_allowed_file_types.includes(value.mimetype)
		) {
			throw new ValidationException([
				{
					field: 'file',
					message: 'Неверный формат!',
				},
			])
		}
		return value
	}
}

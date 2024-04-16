import {
	ArgumentMetadata,
	Injectable,
	Logger,
	PipeTransform,
} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationException } from 'src/infrastructure/exceptions/validation.exception'
import { errorFormatter } from '../../helpers/error-formatter'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	private logger = new Logger(ValidationPipe.name)
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value) {
			return value
		}
		const object = plainToClass(metadata.metatype, value)
		const errors = await validate(object)
		if (errors.length) {
			const messages = errorFormatter(errors)
			throw new ValidationException(messages)
		}
		return value
	}
}

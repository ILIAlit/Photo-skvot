import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationException } from '../../../exceptions/validation.exception'
import { ResponseErrorValidation } from './dto/res-error-validation.dto'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value) {
			return value
		}
		const object = plainToClass(metadata.metatype, value)
		const errors = await validate(object)
		if (errors.length) {
			let messages = errors.map(error => {
				console.log(errors)
				const field = error.property
				const message = Object.values(error.constraints).join(', ')
				return new ResponseErrorValidation(field, message)
			})
			throw new ValidationException(messages)
		}
		return value
	}
}

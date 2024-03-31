import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationException } from './../../exceptions/validation.exception'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!metadata.metatype) {
			return value
		}
		const object = plainToClass(metadata.metatype, value)
		const errors = await validate(object)
		if (errors.length) {
			let messages = errors.map(error => {
				return {
					field: error.property,
					message: Object.values(error.constraints).join(', '),
				}
			})
			throw new ValidationException(messages)
		}
		return value
	}
}

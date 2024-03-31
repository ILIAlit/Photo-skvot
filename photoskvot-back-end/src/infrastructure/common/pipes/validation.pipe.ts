import {
	ArgumentMetadata,
	HttpException,
	HttpStatus,
	Injectable,
	PipeTransform,
} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform {
	async transform(value: any, metadata: ArgumentMetadata) {
		const object = plainToClass(metadata.metatype, value)
		const errors = await validate(object)
		if (errors.length) {
			console.log(errors)
			throw new HttpException('Ошибка валидации', HttpStatus.BAD_REQUEST)
		}
		return object
	}
}

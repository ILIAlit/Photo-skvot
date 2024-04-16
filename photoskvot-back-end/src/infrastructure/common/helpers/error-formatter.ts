import { Logger, ValidationError } from '@nestjs/common'
import { IFormatValidationExceptionMessage } from 'src/domain/exceptions/exceptions.interface'
import { DetailErrorValidation } from 'src/infrastructure/exceptions/dto/detail-error-validation.dto'

export function errorFormatter(
	errors: ValidationError[],
	errMass?: any
): IFormatValidationExceptionMessage[] {
	const logger = new Logger(errorFormatter.name)
	return errors.flatMap(error => {
		logger.error(error?.property)
		const field = error?.property
		if (!error.constraints && error?.children?.length) {
			return errorFormatter(error.children)
		} else {
			const message = Object.values(error?.constraints).join(', ')
			return new DetailErrorValidation(field, message)
		}
	})
}

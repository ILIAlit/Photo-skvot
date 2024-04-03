import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'

export function ApiMultiFormData(
	files?: Record<
		string,
		{ description?: string; type: string; example?: string; nullable: boolean }
	>
) {
	const properties = Object.entries(files).reduce(
		(prev, [name, { description, type, example, nullable }]) => {
			return {
				...prev,
				[name]: {
					description,
					type,
					example,
					nullable,
				},
			}
		},
		{}
	)
	return applyDecorators(
		ApiConsumes('multipart/form-data'),
		ApiBody({
			schema: {
				type: 'object',
				properties,
			},
		})
	)
}

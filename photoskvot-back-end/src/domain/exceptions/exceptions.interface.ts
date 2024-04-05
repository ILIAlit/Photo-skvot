export interface IFormatExceptionMessage {
	statusCode: number
	timestamp: string
	path: string
	message: string
	details: IFormatValidationExceptionMessage[]
}

export interface IFormatValidationExceptionMessage {
	field: string
	message: string
}

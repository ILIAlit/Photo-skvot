export interface ILogger {
	log(message: string)
	error(message: string, trace: string)
	warn(message: string)
	debug(message: string)
	writeToFile(message: string)
}

import { Injectable } from '@nestjs/common'
import { ILogger } from 'src/domain/logger/logger.interface'

@Injectable()
export class EmojiLoggerService implements ILogger {
	log(message: string) {
		this.writeToFile('📢 ' + message)
	}

	error(message: string, trace: string) {
		this.writeToFile('❌ ' + message)
		this.writeToFile('🔍 Stack Trace: ' + trace)
	}

	warn(message: string) {
		this.writeToFile('⚠️ ' + message)
	}

	debug(message: string) {
		this.writeToFile('🐞 ' + message)
	}

	writeToFile(message: string) {
		console.log('🚧 ', message, '⌚', new Date().toUTCString())
	}
}

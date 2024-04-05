import { Module } from '@nestjs/common'
import { EmojiLoggerService } from './logger.service'

@Module({
	providers: [EmojiLoggerService],
	exports: [EmojiLoggerService],
})
export class LoggerModule {}

import { Module } from '@nestjs/common'
import { PostSettingsController } from './post-settings.controller'
import { postSettingsProviders } from './post-settings.providers'
import { PostSettingsService } from './post-settings.service'

@Module({
	controllers: [PostSettingsController],
	providers: [PostSettingsService, ...postSettingsProviders],
	exports: [PostSettingsService],
})
export class PostSettingsModule {}

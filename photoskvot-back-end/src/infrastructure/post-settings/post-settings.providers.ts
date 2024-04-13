import { PostSettingEntity } from './entities/post-setting.entity'
import { PostSettingsRepository } from './post-settings.repository'

export const postSettingsProviders = [
	{ provide: 'IPostSettingsRepository', useClass: PostSettingsRepository },
	{ provide: 'PostSettings', useValue: PostSettingEntity },
]

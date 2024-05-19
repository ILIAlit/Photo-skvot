import { ProfileEntity } from './entity/profile.entity'
import { ProfileRepository } from './profile.repository'

export const profileProviders = [
	{ provide: 'IProfileRepository', useClass: ProfileRepository },
	{ provide: 'Profile', useValue: ProfileEntity },
]

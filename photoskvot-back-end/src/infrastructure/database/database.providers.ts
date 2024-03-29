import { Sequelize } from 'sequelize-typescript'
import { DEVELOPMENT, PRODUCTION, SEQUELIZE } from '../../domain/constants'
import { PhotoEntity } from '../photos/entities/photo.entity'
import { PostEntity } from '../posts/entities/post.entity'
import { ProfileEntity } from '../profile/entity/profile'
import { UserEntity } from '../users/entity/user.entity'
import { databaseConfig } from './database.config'

export const databaseProvider = [
	{
		provide: SEQUELIZE,
		useFactory: async () => {
			let config
			switch (process.env.NODE) {
				case DEVELOPMENT:
					config = databaseConfig.development
					break
				case PRODUCTION:
					config = databaseConfig.production
					break
				default:
					config = databaseConfig.development
			}
			const sequelize = new Sequelize(config)
			sequelize.addModels([UserEntity, ProfileEntity, PostEntity, PhotoEntity])
			await sequelize.sync()
			return sequelize
		},
	},
]

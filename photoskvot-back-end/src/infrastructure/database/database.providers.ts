import { HttpException, HttpStatus } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { DEVELOPMENT, PRODUCTION, SEQUELIZE } from '../../domain/constants'
import { PhotoEntity } from '../photos/entities/photo.entity'
import { PostSettingEntity } from '../post-settings/entities/post-setting.entity'
import { PostEntity } from '../posts/entities/post.entity'
import { ProfileEntity } from '../profile/entity/profile'
import { UserEntity } from '../users/entity/user.entity'
import { databaseConfig } from './database.config'

export const databaseProvider = [
	{
		provide: SEQUELIZE,
		useFactory: async () => {
			try {
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
				sequelize.addModels([
					UserEntity,
					ProfileEntity,
					PostEntity,
					PhotoEntity,
					PostSettingEntity,
				])
				await sequelize.sync()
				return sequelize
			} catch (error) {
				throw new HttpException(
					'Ошибка базы данных!',
					HttpStatus.INTERNAL_SERVER_ERROR
				)
			}
		},
	},
]

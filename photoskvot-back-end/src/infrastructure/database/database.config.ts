import * as dotenv from 'dotenv'
import { IDatabaseConfig } from '../../domain/adapters/database/dbConfig.interface'

dotenv.config()

export const databaseConfig: IDatabaseConfig = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME_DEVELOPMENT,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		port: process.env.DB_PORT,
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME_PRODUCTION,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		port: process.env.DB_PORT,
	},
}

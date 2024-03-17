import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { RepositoriesModule } from './infrastructure/repositories/repositories.module'
import { UsersModule } from './infrastructure/users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
		UsersModule,
		RepositoriesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

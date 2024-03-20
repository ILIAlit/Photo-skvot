import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { UsersController } from './users.controller'
import { userProviders } from './users.providers'
import { UsersService } from './users.service'

@Module({
	imports: [DatabaseModule],
	controllers: [UsersController],
	providers: [UsersService, ...userProviders],
})
export class UsersModule {}

import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ProfileModule } from '../profile/profile.module'
import { UsersController } from './users.controller'
import { userProviders } from './users.providers'
import { UsersService } from './users.service'

@Module({
	imports: [DatabaseModule, ProfileModule],
	controllers: [UsersController],
	providers: [UsersService, ...userProviders],
	exports: [UsersService],
})
export class UsersModule {}

import { Module } from '@nestjs/common'
import { UserRepository } from '../repositories/user/user.repository'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
	controllers: [UsersController],
	providers: [
		UsersService,
		{
			provide: 'iUserRepository',
			useClass: UserRepository,
		},
	],
})
export class UsersModule {}

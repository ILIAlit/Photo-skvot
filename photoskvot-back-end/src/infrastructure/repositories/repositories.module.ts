import { Module } from '@nestjs/common'
import { UserRepository } from './user/user.repository'

@Module({
	providers: [UserRepository],
	exports: [UserRepository],
})
export class RepositoriesModule {}

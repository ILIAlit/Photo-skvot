import { Controller, Get } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@Get()
	async getUsers(): Promise<User[]> {
		return await this.usersService.getUsers()
	}
}

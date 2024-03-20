import { Body, Controller, Get, Post } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@Get()
	async getUsers(): Promise<User[]> {
		return await this.usersService.getUsers()
	}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
		return await this.usersService.createUser(createUserDto)
	}
}

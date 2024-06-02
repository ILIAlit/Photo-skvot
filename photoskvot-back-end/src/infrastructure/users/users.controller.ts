import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/domain/models/user/user'
import { Roles } from '../auth/decorators/roles-auth.decorator'
import { RoleGuard } from '../auth/guards/roles.guard'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { BanUserParams } from './dto/ban-user-params.dto'
import { UsersService } from './users.service'
import { ResUserData } from './dto/res-user-data.dto'

@ApiTags('User')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiResponse({
		status: 200,
		type: [User],
	})
	@Roles('admin')
	@UseGuards(RoleGuard)
	@Get()
	async findAll(): Promise<User[]> {
		return await this.usersService.getUsers()
	}

	@ApiOperation({ summary: 'Get user data' })
	@ApiResponse({ status: 200, type: ResUserData })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'userId' })
	@Get('get-user-data')
	async getUserData(@Query() { userId }): Promise<ResUserData> {
		return await this.usersService.getUserData(userId)
	}

	@ApiOperation({ summary: 'Ban user' })
	@ApiResponse({ status: 200, type: User })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'id', description: 'user id' })
	@Roles('admin')
	@UseGuards(RoleGuard)
	@Get('ban-user')
	async ban(@Query() { id: userId }: BanUserParams): Promise<User> {
		return await this.usersService.banUser(userId)
	}
}

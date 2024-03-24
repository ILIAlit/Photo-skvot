import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { LoginUserDto } from '../users/dto/login-user-dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	async login(@Body() loginUserDto: LoginUserDto): Promise<Object> {
		return await this.authService.login(loginUserDto)
	}

	@Post('register')
	async register(@Body() createUserDto: CreateUserDto): Promise<Object> {
		return await this.authService.register(createUserDto)
	}
}

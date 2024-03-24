import { Module } from '@nestjs/common'
import { BcryptModule } from '../services/bcrypt/bcrypt.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	imports: [UsersModule, BcryptModule, JwtModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}

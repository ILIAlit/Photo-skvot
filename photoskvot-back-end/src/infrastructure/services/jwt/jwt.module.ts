import { Module } from '@nestjs/common'
import { JwtModule as Jwt } from '@nestjs/jwt'
import { JwtService } from './jwt.service'

@Module({
	imports: [
		Jwt.register({
			secret: process.env.JWT_KEY || 'JWT_KEY_ILIA',
			signOptions: { expiresIn: process.env.TOKEN_EXPIRATION || '1h' },
		}),
	],
	providers: [JwtService],
	exports: [JwtService],
})
export class JwtModule {}

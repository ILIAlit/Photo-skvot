import { Injectable } from '@nestjs/common'
import { JwtService as JwtTokenService } from '@nestjs/jwt'
import { User } from 'src/domain/models/user/user'
import { ResponseAuthDto } from 'src/infrastructure/auth/dto/response-auth.dto'
import { TokenAuthDto } from 'src/infrastructure/auth/dto/token-auth.dto'
@Injectable()
export class JwtService {
	constructor(private readonly jwtTokenService: JwtTokenService) {}

	async generateToken(user: User): Promise<ResponseAuthDto> {
		const payload: TokenAuthDto = {
			id: user.id,
			name: user.name,
			role: user.role,
			isBaned: user.isBaned,
		}
		return {
			token: this.jwtTokenService.sign(payload),
		}
	}

	verifyToken(token: string): TokenAuthDto {
		return this.jwtTokenService.verify(token)
	}
}

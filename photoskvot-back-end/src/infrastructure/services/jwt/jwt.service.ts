import { Injectable } from '@nestjs/common'
import { JwtService as JwtTokenService } from '@nestjs/jwt'
import { User } from 'src/domain/models/user/user'
@Injectable()
export class JwtService {
	constructor(private readonly jwtTokenService: JwtTokenService) {}

	async generateToken(user: User): Promise<Object> {
		const payload = { id: user.id, name: user.name, role: user.role }
		return {
			token: this.jwtTokenService.sign(payload),
		}
	}

	async verifyToken(token: string): Promise<any> {
		return this.jwtTokenService.verify(token)
	}
}

import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class BcryptService {
	private _round: number = 10

	async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, this._round)
	}

	async comparePassword(password: string, hash: string): Promise<boolean> {
		return await bcrypt.compare(password, hash)
	}
}

import { IsNumberString } from 'class-validator'

export class BanUserParams {
	@IsNumberString()
	id: number
}

import { ApiProperty } from '@nestjs/swagger'

export class PostSettings {
	@ApiProperty({
		description: 'id',
		nullable: false,
		example: 0,
	})
	id: number
	@ApiProperty({
		description: 'iso',
		nullable: true,
		example: 250,
	})
	iso: number
	@ApiProperty({
		description: 'shutter speed',
		nullable: true,
		example: '1/500',
	})
	shutter_speed: string
	@ApiProperty({
		description: 'aperture',
		nullable: true,
		example: 'f/16',
	})
	aperture: string
	@ApiProperty({
		description: 'instrument',
		nullable: true,
		example: 'Canon EOS R6',
	})
	instrument: string
}

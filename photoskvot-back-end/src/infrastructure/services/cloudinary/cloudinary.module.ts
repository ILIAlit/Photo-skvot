import { Module } from '@nestjs/common'
import { cloudinaryProvider } from './cloudinary.provider'
import { CloudinaryService } from './cloudinary.service'

@Module({
	providers: [CloudinaryService, cloudinaryProvider],
	exports: [CloudinaryService, cloudinaryProvider],
})
export class CloudinaryModule {}

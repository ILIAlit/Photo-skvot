import { forwardRef, Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { CloudinaryModule } from '../services/cloudinary/cloudinary.module'
import { FilesModule } from '../services/files/files.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { photoProviders } from './photo.providers'
import { PhotosController } from './photos.controller'
import { PhotosService } from './photos.service'

@Module({
	imports: [
		forwardRef(() => AuthModule),
		JwtModule,
		FilesModule,
		CloudinaryModule,
	],
	controllers: [PhotosController],
	providers: [PhotosService, ...photoProviders],
	exports: [PhotosService],
})
export class PhotosModule {}

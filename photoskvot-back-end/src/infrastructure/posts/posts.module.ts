import { Module } from '@nestjs/common'
import { PhotosModule } from '../photos/photos.module'
import { PostSettingsModule } from '../post-settings/post-settings.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { postProviders } from './posts.providers'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'

@Module({
	imports: [PhotosModule, PostSettingsModule, JwtModule],
	controllers: [PostsController],
	providers: [PostsService, ...postProviders],
})
export class PostsModule {}

import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { PhotosModule } from '../photos/photos.module'
import { PostSettingsModule } from '../post-settings/post-settings.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { TagsModule } from '../tags/tags.module'
import { PostsController } from './posts.controller'
import { postProviders } from './posts.providers'
import { PostsService } from './posts.service'

@Module({
	imports: [
		PhotosModule,
		PostSettingsModule,
		JwtModule,
		DatabaseModule,
		TagsModule,
	],
	controllers: [PostsController],
	providers: [PostsService, ...postProviders],
})
export class PostsModule {}

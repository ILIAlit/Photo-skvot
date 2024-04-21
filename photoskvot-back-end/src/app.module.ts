import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './infrastructure/auth/auth.module'
import { DatabaseModule } from './infrastructure/database/database.module'
import { LoggerModule } from './infrastructure/logger/logger.module'
import { PhotosModule } from './infrastructure/photos/photos.module'
import { PostSettingsModule } from './infrastructure/post-settings/post-settings.module'
import { PostsModule } from './infrastructure/posts/posts.module'
import { ProfileModule } from './infrastructure/profile/profile.module'
import { CloudinaryModule } from './infrastructure/services/cloudinary/cloudinary.module'
import { FilesModule } from './infrastructure/services/files/files.module'
import { UsersModule } from './infrastructure/users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		UsersModule,
		DatabaseModule,
		AuthModule,
		ProfileModule,
		PhotosModule,
		PostsModule,
		FilesModule,
		LoggerModule,
		CloudinaryModule,
		PostSettingsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

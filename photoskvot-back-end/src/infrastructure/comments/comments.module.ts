import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { CommentSocketService } from './comment-socket.service'
import { CommentsController } from './comments.controller'
import { commentProviders } from './comments.providers'
import { CommentsService } from './comments.service'

@Module({
	imports: [AuthModule, JwtModule],
	controllers: [CommentsController],
	providers: [CommentsService, CommentSocketService, ...commentProviders],
})
export class CommentsModule {}

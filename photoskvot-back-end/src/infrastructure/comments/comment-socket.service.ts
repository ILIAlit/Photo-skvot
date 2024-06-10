import {
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	SubscribeMessage,
	WebSocketGateway,
} from '@nestjs/websockets'
import { CreateCommentDto } from './dto/create-comment.dto'

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class CommentSocketService implements OnGatewayConnection {
	handleConnection(client: any, ...args: any[]) {
		console.log('connection')
	}

	@SubscribeMessage('server-create-comment')
	createComment(
		@MessageBody() dto: CreateCommentDto,
		@ConnectedSocket() client: any
	) {
		client.emit('client-create-comment', dto)
	}
}

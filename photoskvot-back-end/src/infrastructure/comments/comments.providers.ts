import { CommentsRepository } from './comments.repository'
import { CommentEntity } from './entities/comment.entity'

export const commentProviders = [
	{ provide: 'ICommentRepository', useClass: CommentsRepository },
	{ provide: 'Comment', useValue: CommentEntity },
]

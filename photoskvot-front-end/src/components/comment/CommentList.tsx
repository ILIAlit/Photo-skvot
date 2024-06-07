'use client'

import { useGetPostComment } from '@/hooks/post/useGetPostComment'
import { commentService } from '@/services/comment.service'
import { ICommentForm } from '@/types/comment.types'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button, ButtonVariant } from '../UI/buttons/Button'
import { TextArea } from '../UI/inputs/TextArea'
import { CommentItem } from './CommentItem'

interface CommentListProps {
	postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
	const { commentData, isLoading } = useGetPostComment(postId)

	const { register, handleSubmit, reset } = useForm<ICommentForm>({
		mode: 'onChange',
	})

	const { mutate } = useMutation({
		mutationKey: ['create-comment'],
		mutationFn: (data: ICommentForm) => commentService.create(data),
		onSuccess: () => {
			toast.success('Успешное создание комментария')
			reset()
		},
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const onSubmit: SubmitHandler<ICommentForm> = (data: ICommentForm) => {
		data.postId = postId
		mutate(data)
	}

	return (
		<div className='w-full bg-white rounded-lg border p-2 my-4 mx-6'>
			<h3 className='font-bold'>Discussion</h3>

			<form>
				<div className='w-full px-3 my-2'>
					<TextArea id='comment' {...register('text')} />
				</div>

				<div className='w-full flex justify-end px-3'>
					<Button
						onClick={handleSubmit(onSubmit)}
						styles='max-w-32'
						variant={ButtonVariant.contained}
					>
						Отправить
					</Button>
				</div>
				<div className='flex flex-col'>
					{commentData &&
						commentData.map(comment => {
							return (
								<CommentItem
									key={comment.id}
									text={comment.text}
									userId={comment.user_id}
								/>
							)
						})}
				</div>
			</form>
		</div>
	)
}

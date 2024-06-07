'use client'

import { Button, ButtonVariant } from '../UI/buttons/Button'

interface CommentListProps {}

export const CommentList = ({}: CommentListProps) => {
	//const { data: postsData, isLoading } = useGetUserFavorite()

	return (
		<div className='w-full bg-white rounded-lg border p-2 my-4 mx-6'>
			<h3 className='font-bold'>Discussion</h3>

			<form>
				<div className='flex flex-col'>
					<div className='border rounded-md p-3 ml-3 my-3'>
						<div className='flex gap-3 items-center'>
							<img
								src='https://avatars.githubusercontent.com/u/22263436?v=4'
								className='object-cover w-8 h-8 rounded-full 
                            border-2 border-emerald-400  shadow-emerald-400
                            '
							/>

							<h3 className='font-bold'>User name</h3>
						</div>

						<p className='text-gray-600 mt-2'>this is sample commnent</p>
					</div>

					<div className='border rounded-md p-3 ml-3 my-3'>
						<div className='flex gap-3 items-center'>
							<img
								src='https://avatars.githubusercontent.com/u/22263436?v=4'
								className='object-cover w-8 h-8 rounded-full 
                            border-2 border-emerald-400  shadow-emerald-400
                            '
							/>

							<h3 className='font-bold'>User name</h3>
						</div>

						<p className='text-gray-600 mt-2'>this is sample commnent</p>
					</div>
				</div>

				<div className='w-full px-3 my-2'>
					<textarea
						className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
						name='body'
						placeholder='Type Your Comment'
						required
					></textarea>
				</div>

				<div className='w-full flex justify-end px-3'>
					<Button styles='max-w-32' variant={ButtonVariant.contained}>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	)
}

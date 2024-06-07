'use client'

interface CommentItemProps {
	text: string
	userId: number
}

export const CommentItem = ({ text, userId }: CommentItemProps) => {
	return (
		<div className='border text-primary rounded-md p-3 ml-3 my-3'>
			<div className='flex gap-3 items-center'>
				<img
					src='https://avatars.githubusercontent.com/u/22263436?v=4'
					className='object-cover w-8 h-8 rounded-full 
			border-2 border-emerald-400  shadow-emerald-400
			'
				/>

				<h3 className='font-bold'>User name</h3>
			</div>

			<p className='text-gray-600 mt-2'>{text}</p>
		</div>
	)
}

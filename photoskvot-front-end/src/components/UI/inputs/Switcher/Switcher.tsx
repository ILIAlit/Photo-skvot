interface SwitcherFieldProps {
	text?: string
	onChange?: () => void
}

export const Switcher = ({ text, onChange }: SwitcherFieldProps) => {
	return (
		<div className='flex gap-2'>
			<input
				onChange={onChange}
				type='checkbox'
				className='peer sr-only opacity-0'
				id='toggle'
			/>
			<label
				htmlFor='toggle'
				className='relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500'
			>
				<span className='sr-only'>Enable</span>
			</label>
			<p className='text-sm'>{text}</p>
		</div>
	)
}

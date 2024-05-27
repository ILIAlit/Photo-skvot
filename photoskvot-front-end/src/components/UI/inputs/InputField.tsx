import { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	extra?: string
	placeholder?: string
	state?: string
	disabled?: boolean
	type?: string
	onChange?: any
	styles?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			id,
			extra,
			placeholder,
			state,
			disabled,
			type,
			onChange,
			styles,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<input
					ref={ref}
					onChange={onChange}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={`w-full px-8 py-4 rounded-lg font-medium border border-primary placeholder-secondary text-sm focus:outline-none focus:border-secondary focus:placeholder-light transition-all duration-500 ${styles} ${
						disabled === true
							? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
							: state === 'error'
								? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
								: state === 'success'
									? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
									: 'border-gray-200 dark:!border-white/10 dark:text-white'
					}`}
					{...rest}
				/>
			</div>
		)
	}
)

InputField.displayName = 'InputField'

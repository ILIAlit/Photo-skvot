import { forwardRef } from 'react'

interface TextAreaProps {
	id: string
	extra?: string
	placeholder?: string
	state?: string
	disabled?: boolean
	type?: string
	onChange?: (event: any) => void
	styles?: string
	value?: string
	hidden?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
			value,
			hidden,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<textarea
					hidden={hidden}
					value={value}
					ref={ref}
					onChange={onChange}
					disabled={disabled}
					id={id}
					placeholder={placeholder}
					name='body'
					rows={5}
					required
					className='appearance-none block w-full bg-gray-200 text-primary border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary'
					{...rest}
				></textarea>
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'

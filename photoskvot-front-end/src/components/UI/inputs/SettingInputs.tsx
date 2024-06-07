import { IPostForm } from '@/types/post.types'
import { UseFormRegister } from 'react-hook-form'
import { InputField } from './InputField'

interface SettingInputsFieldProps {
	register: UseFormRegister<IPostForm>
}

export const SettingInputs = ({ register }: SettingInputsFieldProps) => {
	return (
		<div className='p-4 flex flex-col gap-2'>
			<InputField
				styles='py-1'
				id='shutter_speed'
				placeholder='Выдержка'
				type='text'
				{...register('settings.shutter_speed')}
			/>
			<InputField
				styles='py-1'
				id='aperture'
				placeholder='Диафрагма'
				type='text'
				{...register('settings.aperture')}
			/>
			<InputField
				styles='py-1'
				id='ISO'
				placeholder='ISO'
				type='text'
				{...register('settings.iso')}
			/>
			<InputField
				styles='py-1'
				id='instrument'
				placeholder='Инструмент'
				type='text'
				{...register('settings.instrument')}
			/>
		</div>
	)
}

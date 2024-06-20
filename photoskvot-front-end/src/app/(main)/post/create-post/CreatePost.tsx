'use client'

import { Button, ButtonVariant } from '@/components/UI/buttons/Button'
import { InputField } from '@/components/UI/inputs/InputField'
import { SettingInputs } from '@/components/UI/inputs/SettingInputs'
import { Switcher } from '@/components/UI/inputs/Switcher/Switcher'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { IPostForm } from '@/types/post.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { postService } from '../../../../services/post.service'

export default function CreatePost() {
	const [loading, setLoading] = useState(false)
	const [fileSrc, setFileSrc] = useState<string>()
	const [settingOpen, setSettingOpen] = useState(false)

	const { register, handleSubmit, reset } = useForm<IPostForm>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target?.files?.[0]
		if (file) {
			setFileSrc(URL.createObjectURL(file))
		}
	}

	const { mutate } = useMutation({
		mutationKey: ['create-post'],
		mutationFn: (data: FormData) => postService.create(data),
		onSuccess: () => {
			toast.success('Успешное создание поста')
			reset()
			setLoading(false)
		},
		onError: (err: any) => {
			toast.error(err.response.data.message)
			console.log(err)
			setLoading(false)
		},
	})

	function transformRequestData(data: IPostForm): FormData {
		const tagArray = data.tags.split(',')
		const formData = new FormData()
		formData.append('image', data.image[0])
		formData.append('title', data.title)
		formData.append('description', data.description)
		formData.append('tags', JSON.stringify(tagArray))
		formData.append('settings', JSON.stringify(data.settings))
		return formData
	}

	const onSubmit: SubmitHandler<IPostForm> = (data: IPostForm) => {
		setLoading(true)
		const transformedData = transformRequestData(data)
		mutate(transformedData)
	}

	return (
		<div className='text-primary'>
			<div className='text-center flex justify-center'>
				<span className='text-primary text-1.5xl font-semibold max-w-96'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. 
				</span>
			</div>
			<form className='flex justify-center mt-12 gap-7'>
				<div
					className='w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6'
					id='dropzone'
				>
					<InputField
						id='image'
						type='file'
						{...register('image')}
						onChange={(event: any) => handleFileChange(event)}
						styles='absolute inset-0 w-full h-full opacity-0 z-50'
					/>
					<div className='flex flex-col gap-2 items-center'>
						<img
							className='mx-auto h-12 w-12'
							src='https://www.svgrepo.com/show/357902/image-upload.svg'
							alt=''
						/>

						<div className='text-light flex flex-col gap-2'>
							<div>
								<span>Drag and drop</span>
								<span className='text-primary'> or browse </span>
								<span>to upload</span>
							</div>
							<Button variant={ButtonVariant.contained} styles='max-w-56'>
								Выбрать файл
							</Button>
						</div>
						<p className='mt-1 text-xs text-gray-500'>
							PNG, JPG, GIF up to 10MB
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<img src={fileSrc} className='mt-4 mx-auto max-h-40' id='preview' />
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<InputField
						id='title'
						placeholder='Заголовок'
						type='text'
						{...register('title')}
					/>
					<InputField
						id='description'
						placeholder='Описание'
						type='text'
						{...register('description')}
					/>
					<Switcher
						onChange={() => setSettingOpen(!settingOpen)}
						text='Выставить настройки'
					/>
					<SettingInputs
						style={settingOpen ? '' : 'hidden'}
						register={register}
					/>
					<div>
						<InputField
							id='tags'
							placeholder='Тэги'
							type='text'
							{...register('tags')}
						/>
					</div>
				</div>
			</form>
			<div className='flex gap-3 mt-6 justify-center'>
				<Button
					onClick={handleSubmit(onSubmit)}
					styles='max-w-52'
					variant={ButtonVariant.contained}
					isLoad={loading}
				>
					Создать
				</Button>
				<Button
					onClick={() => push(PUBLIC_PAGES.HOME)}
					styles='max-w-52'
					variant={ButtonVariant.outlined}
				>
					Отмена
				</Button>
			</div>
		</div>
	)
}

import Button from '@/components/UI/buttons/Button'
import { InputField } from '@/components/UI/inputs/InputField'

export default function CreatePost() {
	// const { register, handleSubmit, reset } = useForm<IPostForm>({
	// 	mode: 'onChange',
	// })

	// const { mutate } = useMutation({
	// 	mutationKey: ['create-post'],
	// 	mutationFn: (data: IPostForm) => authService.login(data),
	// 	onSuccess: () => {
	// 		toast.success('Пост создан')
	// 		reset()
	// 	},
	// 	onError: (err: any) => {
	// 		toast.error(err.response.data.message)
	// 	},
	// })

	// const onSubmit: SubmitHandler<IPostForm> = (data: IPostForm) => {
	// 	mutate(data)
	// }
	return (
		<div>
			<div>
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. 
				</span>
			</div>
			<form className='flex'>
				<div
					className='w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6'
					id='dropzone'
				>
					<input
						type='file'
						className='absolute inset-0 w-full h-full opacity-0 z-50'
					/>
					<div className='text-center'>
						<img
							className='mx-auto h-12 w-12'
							src='https://www.svgrepo.com/show/357902/image-upload.svg'
							alt=''
						/>

						<h3 className='mt-2 text-sm font-medium text-gray-900'>
							<span>Drag and drop</span>
							<span className='text-indigo-600'> or browse</span>
							<span>to upload</span>
							<input
								id='file-upload'
								name='file-upload'
								type='file'
								className='sr-only'
							/>
						</h3>
						<p className='mt-1 text-xs text-gray-500'>
							PNG, JPG, GIF up to 10MB
						</p>
					</div>

					<img src='' className='mt-4 mx-auto max-h-40 hidden' id='preview' />
				</div>
				<div>
					<InputField id='title' placeholder='Заголовок' />
					<InputField id='description' placeholder='Описание' />
					<div className='p-4'>
						<InputField id='title' placeholder='Заголовок' />
						<InputField id='title' placeholder='Заголовок' />
						<InputField id='title' placeholder='Заголовок' />
					</div>
					<div></div>
				</div>
			</form>
			<div className='flex'>
				<Button variant='contained'>Создать</Button>
				<Button>Отмена</Button>
			</div>
		</div>
	)
}

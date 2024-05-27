'use client'

import AuthButton from '@/components/UI/buttons/AuthButton'
import { InputField } from '@/components/UI/inputs/InputField'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import UserStore from '@/stores/UserStore'
import { IRegisterForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Register() {
	const { register, handleSubmit, reset } = useForm<IRegisterForm>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IRegisterForm) => UserStore.register(data),
		onSuccess: () => {
			toast.success('Успешная регистрация')
			reset()
			push(PUBLIC_PAGES.HOME)
		},
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const onSubmit: SubmitHandler<IRegisterForm> = (data: IRegisterForm) => {
		mutate(data)
	}
	return (
		<div className='min-h-screen bg-white text-primary flex justify-center'>
			<div className=' bg-white sm:rounded-lg flex justify-center flex-1'>
				<div className='flex-1 bg-primary text-center hidden lg:flex'>
					<div
						className=' bg-white  my-28 xl:ml-64 lg:ml-28  w-full bg-cover bg-center bg-no-repeat'
						style={{
							backgroundImage: `url(
								"http://localhost:3000/bg-picture.png"
							)`,
						}}
					></div>
				</div>
				<div className=' flex flex-1 flex-col justify-center lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
					<div className='mt-12 flex flex-col items-center'>
						<h1 className='text-2xl xl:text-3xl font-extrabold'>Регистрация</h1>
						<div className='w-full flex-1 mt-8'>
							<div className='mx-auto max-w-xs'>
								<form onSubmit={handleSubmit(onSubmit)}>
									<InputField
										{...register('name')}
										id='name'
										placeholder='Логин'
										type='text'
									/>
									<InputField
										{...register('email')}
										id='email'
										placeholder='Почта'
										type='email'
										styles='mt-3'
									/>
									<InputField
										{...register('password')}
										id='password'
										placeholder='Пароль'
										type='password'
										styles='mt-3'
									/>
									<InputField
										id='confirmPassword'
										placeholder='Повторите пароль'
										type='password'
										styles='mt-3'
									/>
									<AuthButton>Регистрация</AuthButton>
								</form>
								<div className='my-12 border-b text-center'>
									<a
										href='#'
										className='leading-none px-2 inline-block text-sm text-secondary tracking-wide font-medium bg-white transform translate-y-1/2'
									>
										Логин
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

'use client'

import { Button, ButtonVariant } from '../buttons/Button'
import { InputField } from '../inputs/InputField'

interface TabProps {
	styles?: string
	setEditing?: () => void
}

export const ProfileForm = ({ styles, setEditing }: TabProps) => {
	return (
		<section className='w-full overflow-hidden dark:bg-gray-900'>
			<div className='w-full mx-auto'>
				<div className='w-full mx-auto flex justify-center'>
					<div className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] shadow-xl bg-[url('https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
						<div className='bg-white rounded-full w-6 h-6 text-center ml-11 mt-4 relative'>
							<input
								type='file'
								name='profile'
								id='upload_profile'
								hidden
								required
							/>

							<label
								htmlFor='upload_profile'
								className='inline-flex items-center'
							>
								<svg
									data-slot='icon'
									className='w-5 h-5 text-blue-700'
									fill='none'
									stroke-width='1.5'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
									></path>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
									></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center gap-3'>
					<div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full'>
						<div className='w-full  mb-4 mt-6'>
							<InputField id='name' />
						</div>
						<div className='w-full  mb-4 lg:mt-6'>
							<InputField id='status' />
						</div>
					</div>
					<div className='w-full  mb-4 mt-6'>
						<InputField id='name' />
					</div>
					<textarea
						placeholder='О себе'
						className='py-3 border border-slate-200 rounded-lg px-3 focus:outline-none w-full focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100'
						name='bio'
					></textarea>

					<div className='flex gap-4'>
						<Button styles='w-48' variant={ButtonVariant.contained}>
							Сохранить
						</Button>
						<Button
							onClick={setEditing}
							styles='w-48'
							variant={ButtonVariant.outlined}
						>
							Отменить
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

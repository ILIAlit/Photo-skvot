'use client'

import { Button, ButtonVariant } from '@/components/UI/buttons/Button'
import { useState } from 'react'
import { ProfileForm } from './ProfileForm'

interface ProfilePreviewProps {
	styles?: string
}

export const ProfilePreview = ({ styles }: ProfilePreviewProps) => {
	const [editingProfile, setEditingProfile] = useState(false)

	return editingProfile ? (
		<ProfileForm setEditing={() => setEditingProfile(false)} />
	) : (
		<section className='w-full overflow-hidden dark:bg-gray-900'>
			<div className='w-full mx-auto'>
				<div className='w-full mx-auto flex justify-center'>
					<img
						src='https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080'
						alt='User Profile'
						className='rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] shadow-xl'
					/>
				</div>

				<div className='xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center'>
					<h1 className='text-center text-primary text-4xl'>Samuel Abera</h1>

					<span className='inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full'>
						UI/UX
					</span>

					<p className=' w-full text-primary text-md text-pretty text-center'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						debitis labore consectetur voluptatibus mollitia dolorem veniam
						omnis ut quibusdam minima sapiente repellendus asperiores explicabo,
						eligendi odit, dolore similique fugiat dolor, doloremque eveniet.
						Odit, consequatur. Ratione voluptate exercitationem hic eligendi
						vitae animi nam in, est earum culpa illum aliquam. Atque aperiam et
						voluptatum voluptate distinctio, nostrum hic voluptatibus nisi.
						Eligendi voluptatibus numquam maxime voluptatem labore similique qui
						illo est magnam adipisci autem quisquam, quia incidunt excepturi,
						possimus odit praesentium?
					</p>

					<Button
						onClick={() => setEditingProfile(true)}
						styles='max-w-36'
						variant={ButtonVariant.contained}
					>
						Изменить
					</Button>
				</div>
			</div>
		</section>
	)
}

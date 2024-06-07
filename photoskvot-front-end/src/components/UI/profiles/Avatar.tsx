'use client'

interface AvatarProps {
	styles?: string
	avatarSrc?: string
	userName?: string
}

export const Avatar = ({ styles, avatarSrc, userName }: AvatarProps) => {
	const getFirstLatter = (userName: string | undefined) => {
		if (!userName) return
		return userName.charAt(0).toUpperCase()
	}

	return (
		<div className='group cursor-pointer'>
			<div
				className={
					'bg-lightPrimary h-16 w-16 rounded-full hover:opacity-80 focus:outline-none ' +
					styles
				}
			>
				{avatarSrc ? (
					<img
						src={avatarSrc}
						className={'object-cover w-full h-full rounded-full'}
						alt='logo'
					/>
				) : (
					<b>
						<span className='text-primary select-none'>
							{getFirstLatter(userName)}
						</span>
					</b>
				)}
			</div>
		</div>
	)
}

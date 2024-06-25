import { DashboardSwitch } from '@/components/admin/dashboard/DashboardSwitch'

export default function Layout({ children }: any) {
	return (
		<div className='flex flex-col min-h-screen'>
			<DashboardSwitch children={children} />
			{/* <main className='flex-grow p-5 mt-5'>{children}</main> */}
		</div>
	)
}

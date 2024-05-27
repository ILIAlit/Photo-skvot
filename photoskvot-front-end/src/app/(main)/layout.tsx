import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function Layout({ children }: any) {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />
			<main className='flex-grow p-5 mt-5'>{children}</main>
			<Footer />
		</div>
	)
}

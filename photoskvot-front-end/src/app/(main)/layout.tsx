import NavBar from '@/components/NavBar'

export default function Layout({ children }: any) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	)
}

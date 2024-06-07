'use client'

import ShowUserData from './ShowUserData'
import { useParams } from 'next/navigation'
interface Props {}

const ShowPage = () => {
	const { userId } = useParams()
	return <ShowUserData userId={Number(userId)} />
}

export default ShowPage

'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import UserPage from './UserPage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <UserPage />
})

export default Page

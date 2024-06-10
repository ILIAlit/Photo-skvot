'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import AdminPage from './AdminPage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <AdminPage />
})

export default Page

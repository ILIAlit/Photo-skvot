'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import MyCoursesPage from './MyCoursesPage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <MyCoursesPage />
})

export default Page

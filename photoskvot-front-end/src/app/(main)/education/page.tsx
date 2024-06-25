'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import CoursesPage from './CoursesPage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <CoursesPage />
})

export default Page

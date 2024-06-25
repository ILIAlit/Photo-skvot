'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import CoursePage from './CoursePage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <CoursePage />
})

export default Page

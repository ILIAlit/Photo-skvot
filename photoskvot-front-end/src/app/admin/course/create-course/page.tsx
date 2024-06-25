'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'
import CreateCoursePage from './CreateCoursePage'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return <CreateCoursePage />
})

export default Page

import { NextPage } from 'next'

export type TypeRole = {
	isOnlyAdmin: boolean
	isOnlyUser: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRole

export type TypeComponentAuthField = { Component: TypeRole }

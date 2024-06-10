import SocketApi from '@/api/socket-api'
import { IComment } from '@/types/comment.types'
import { useEffect, useState } from 'react'

export const useConnectSocket = () => {
	const [comment, setComment] = useState<IComment>()

	const connectSocket = () => {
		SocketApi.createConnection()

		SocketApi.socket?.on('client-create-comment', (commentDto: IComment) => {
			setComment(commentDto)
		})
	}

	useEffect(() => {
		connectSocket()
	}, [])

	return {
		comment,
	}
}

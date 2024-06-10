import { io, Socket } from 'socket.io-client'

class SocketApi {
	static socket: null | Socket = null

	static createConnection() {
		this.socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}`)

		this.socket.on('connect', () => {
			console.log('socket connected')
		})

		this.socket.on('disconnect', err => {
			console.log('socket disconnected')
		})
	}
}

export default SocketApi

import { photoService } from '@/services/photo.service'
import { IPhoto } from '@/types/photo.types'
import { useQuery } from '@tanstack/react-query'

export function useGetPostPhoto(postId: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['post-photo' + postId],
		queryFn: () => photoService.getPostPhoto(postId),
	})
	const photoData: IPhoto = data?.data
	return { photoData, isLoading }
}

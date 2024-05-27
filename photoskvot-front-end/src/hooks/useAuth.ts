import UserStore from '@/stores/UserStore'

export const useAuth = () => UserStore.isUserAuth

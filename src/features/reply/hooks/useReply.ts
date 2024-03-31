import { API } from '../../../libs/api'
import { useAppDispatch, useAppSelector } from '../../../stores/types/rootState'
import { GET_ONE_THREAD } from '../../../stores/rootReducer'



export const useReply = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.auth.id);

    async function getThread(id:number) {
        const response = await API.get(`/thread/${id}?id=${user}`)
        dispatch(GET_ONE_THREAD(response.data))
    }

  return {
    getThread
  }
}


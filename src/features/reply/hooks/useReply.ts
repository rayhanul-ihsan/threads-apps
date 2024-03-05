import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../../libs/api'
import { RootState } from '../../../stores/types/rootState'
import { GET_ONE_THREAD } from '../../../stores/rootReducer'



export const useReply = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth.id);

    async function getThread(id:number) {
        const response = await API.get(`/thread/${id}?id=${user}`)
        // console.log(response)
        dispatch(GET_ONE_THREAD(response.data))
    }

  return {
    getThread
  }
}


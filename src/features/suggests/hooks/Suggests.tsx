import React, { useEffect } from 'react'
import  SuggestComp  from '../components/SuggestComp'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../stores/types/rootState'
import { fetchUsers } from '../../../stores/slices/suggestSlice'



export default function Suggests() {
  const dispatch = useDispatch()

  const getSuggest = useSelector((state: RootState) => state.suggest)

  useEffect(() => {
      dispatch(fetchUsers())
  },[])

  return (
    <div>
        
        {getSuggest?.data.data.map((item) => (
                <SuggestComp
                key={item.id}
                id={item.id}
                name={item.full_name}
                username={item.user_name}
                image={item.profile_picture}
                />
            ))
        }
    </div>
  )
}

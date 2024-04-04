import { useEffect } from 'react'
import  SuggestComp  from './SuggestComp'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../stores/types/rootState'
import { fetchFollow } from '../../../stores/slices/followSlice'



export default function Suggests() {
  const dispatch = useDispatch<AppDispatch>()

  const getSuggest = useSelector((state: RootState) => state.suggest)
 
  useEffect(() => {
      dispatch(fetchFollow())
  },[])

  return (
    <div>
        {getSuggest?.isLoading && <div>Loading...</div>}
        {getSuggest?.data.data.map((item) => (
                <SuggestComp
                key={item.id}
                id={item.id}
                full_name={item.full_name}
                user_name={item.user_name}
                profile_picture={item.profile_picture}
                />
            ))
        }
    </div>
  )
}

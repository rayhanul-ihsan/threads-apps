import { useEffect } from 'react'
import CardComp from './CardComp'
import { fetchThread}  from '../../../stores/slices/threadSlice'
import { useAppDispatch, useAppSelector } from '../../../stores/types/rootState'



export default function Cards() {
  const dispatch = useAppDispatch()

  const getThread = useAppSelector((state)=> state.thread)
  const auth = useAppSelector((state)=> state.auth.id)

  
  useEffect(() => {
    dispatch(fetchThread())
  },[])
  if (auth === 0) return null
  return (
    <>
        {getThread.isLoading && <h1>Loading...</h1>}
        {getThread.data.map((item) => (
                <CardComp
                key={item.id}
                id={item.id}
                name={item.author.full_name}
                username={item.author.user_name}
                reply={item.replies.length}
                profile={item.author.profile_picture}
                image={item.image}
                jam={item.createdAt}
                description={item.content} 
                like={item.likes}
                userLogin={auth}
                />
            ))
        }
    </>
  )
}

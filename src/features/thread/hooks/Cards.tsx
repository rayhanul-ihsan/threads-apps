import { useEffect } from 'react'
import CardComp from '../components/CardComp'
import { fetchThread}  from '../../../stores/slices/threadSlice'
import { useAppDispatch, useAppSelector } from '../../../stores/types/rootState'



export default function Cards() {
  const dispatch = useAppDispatch()

  const getThread = useAppSelector((state)=> state.thread)

  
  useEffect(() => {
    
    dispatch(fetchThread())
  },[])

  return (
    <>
        {getThread.isLoading && <h1>Loading...</h1>}
        {getThread.data.map((item) => (
                <CardComp
                key={item.id}
                id={item.id}
                name={item.author.full_name}
                username={item.author.user_name}
                reply={item.reply}
                profile={item.author.profile_picture}
                image={item.image}
                jam={item.createdAt}
                description={item.content} 
                like={item.likes}
                />
            ))
        }
    </>
  )
}

import React, { useEffect } from 'react'
import data from '../../../mocks/card'
import CardComp from '../components/CardComp'
import { API } from '../../../libs/api'
import { useDispatch, useSelector } from 'react-redux'
import { fetchThread}  from '../../../stores/slices/threadSlice'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../stores/types/rootState'



export default function Cards() {
   const handleGetThread = async () => {
    try {
      const response = await API.get('/thread')
      // console.log("respomse",response.data)
      return response.data
    } catch (error) {
      console.log(error)
      
    }
  }

  const dispatch = useDispatch()

  const getThread = useSelector((state: RootState)=> state.thread)
  // console.log('getthread', getThread)

  useEffect(() => {
    handleGetThread()
    
    dispatch(fetchThread())
  },[])

  return (
    <div>
        
        {getThread.data.map((item) => (
                <CardComp
                key={item.id}
                id={item.id}
                name={item.author.full_name}
                username={item.author.user_name}
                // imageCover={item.image_cover}
                profile={item.author.profile_picture}
                image={item.image}
                jam={item.createdAt}
                description={item.content} 
                like={item.likes}
                />
            ))
        }
    </div>
  )
}

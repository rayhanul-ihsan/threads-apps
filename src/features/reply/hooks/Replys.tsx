// import  { useEffect } from 'react'
// import {  useAppDispatch, useAppSelector } from '../../../stores/types/rootState'
// import Coment from '../components/Coment'
// import { useParams } from 'react-router-dom'
// import { fetchThread } from '../../../stores/slices/threadSlice'

// export default function Replys() {
//   const params = useParams()
//   const id = params.id
//   console.log(id)
//   // const handleGets = async () => {
//     //     try {
//       //         const response = await API.post('/reply/thread')
//     //         console.log("respomse",response.data)
//     //         return response.data
//     //     } catch (error) {
//       //         console.log(error)
//       //     }
//       // }
      
//       const getThread = useAppSelector((state)=> state.thread)
//       console.log(getThread)
//     const dispatch = useAppDispatch()

//     useEffect(() => {
//       dispatch(fetchThread())
//     },[])
//   return (
//     <>
//         {getThread.isLoading && <h1>Loading...</h1>}
//         {getThread.data.map((item) => (
//                 <Coment
//                 key={item.id}
//                 id={item.id}
//                 name={item.author.full_name}
//                 username={item.author.user_name}
//                 // imageCover={item.image_cover}
//                 profile={item.author.profile_picture}
//                 image={item.image}
//                 jam={item.createdAt}
//                 description={item.content}
//                 like={item.likes}
//                 />
//             ))
//         }
//     </>
//   )
// }

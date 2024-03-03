import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../stores/types/rootState'
import { API } from '../../../libs/api'
import { GET_USERS } from '../../../stores/rootReducer'
import { IUser } from '../../../interface/user'

export  function useSearch() {
//     const dispatch = useDispatch()
//     const users = useSelector((state: RootState) => state.user.user)
//     console.log(users)
//     const [inputUser, setInputUser] = React.useState("")
//     const [data, setData] = React.useState<IUser[]>([])
//     console.log(`sasaa`,data)
//     console.log(inputUser)
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { value } = e.target
//         setInputUser(value)

//     }

//      useEffect(() => {
//         async function fetchData() { 
//             try {
//                 const response = await API.get('/users')
//                 dispatch(GET_USERS(response.data))
//                 // console.log(response.data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchData()
        
//     },[])

//     useEffect(()=> {
//         searchUsers()
//     },[inputUser])

//     const searchUsers = () => {
//         const filtered = users.filter((user) => {
//             user.user_name?.toLowerCase().includes(inputUser.toLowerCase())
//         })
//         setData(filtered)
//     }
// return{
//     handleChange,
//     data
    
// }

    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.user.user)
    console.log("users:", users)
    const  [filteredUsers, setFilteredUsers] = React.useState(users)
    

    useEffect(() => {
        async function fetchData() { 
            try {
                const response = await API.get('/users')
                dispatch(GET_USERS(response.data))
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    // useEffect(() => {}, [])
    
    
    const searchUsers = (searchQuery: string) => {
        const filtered = users.filter((user) => {
            user.user_name?.toLowerCase().includes(searchQuery.toLowerCase())
        }) 
        setFilteredUsers(filtered)
    }
  return {
    searchUsers,
    filteredUsers,
    users
  }
}

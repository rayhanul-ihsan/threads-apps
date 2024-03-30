import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../stores/types/rootState'
import { API } from '../../../libs/api'
import { GET_USERS } from '../../../stores/rootReducer'
import { IUser } from '../../../interface/user'

export  function useSearch() {

    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.user.user)
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
    },[dispatch])

    // useEffect(() => {}, [])
    
    
    const searchUsers = (searchQuery: string) => {
        const filtered = users.filter((user) => {
           return user.user_name?.toLowerCase().includes(searchQuery.toLowerCase())
        }) 
        setFilteredUsers(filtered)
    }

    // Menambahkan useEffect untuk memperbarui filteredUsers saat users berubah
    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    console.log("users:", filteredUsers)

  return {
    searchUsers,
    filteredUsers,
    users
  }
}

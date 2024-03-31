import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IUserLogin } from '../../../interface/user'
import { API, setAuthToken } from '../../../libs/api'
import { useNavigate } from 'react-router-dom'
import { AUTH_LOGIN } from '../../../stores/rootReducer'

export default function UseLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form, setForm] = useState<IUserLogin>({
        password: '',
        user_name: ''
    })

function handleChange(e: ChangeEvent<HTMLInputElement>){
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
} 

async function handleLogin() {
    try {
        const response = await API.post('/auth/login', form)
        console.log("response",response.data);
        
        localStorage.setItem('token', response.data.token)
        dispatch(AUTH_LOGIN(response.data))
        setAuthToken(response.data.token)
        navigate("/")
    } catch (error) {
        throw(error)        
    }
}

    return {handleLogin, handleChange}
}

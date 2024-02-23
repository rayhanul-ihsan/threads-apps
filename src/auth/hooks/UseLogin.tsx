import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IUserLogin } from '../../interface/user'
import { API } from '../../libs/api'
import { useNavigate } from 'react-router-dom'
import { AUTH_LOGIN } from '../../stores/rootReducer'

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
        // console.log(form);
        
        const response = await API.post('/auth/login', form)

        dispatch(AUTH_LOGIN(response.data))
        console.log(response.data)
        // console.log(form)

        localStorage.setItem('authDate',  JSON.stringify(response.data.user))

        // navigate("/")
    } catch (error) {
        throw(error)        
    }
}

    return {handleLogin, handleChange}
}

import { ChangeEvent, useState } from 'react'
import { IUserLogin, IUserRegister } from '../../interface/user'
import { API } from '../../libs/api'

export default function UseLogin() {
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
        console.log(form);
        
        await API.post('/auth/login', form)
    } catch (error) {
        throw(error)        
    }
}

    return {handleLogin, handleChange}
}

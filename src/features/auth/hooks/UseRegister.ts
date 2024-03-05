import { ChangeEvent, useState } from 'react'
import { IUserRegister } from '../../../interface/user'
import { API } from '../../../libs/api'

export default function UseRegister() {
    const [form, setForm] = useState<IUserRegister>({
        email: '',
        full_name: '',
        password: '',
        user_name: ''
    })

function handleChange(e: ChangeEvent<HTMLInputElement>){
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
}

async function handleRegister() {
    try {
        await API.post('/auth/register', form)
    } catch (error) {
        throw(error)        
    }
}

    return {handleRegister, handleChange}
}

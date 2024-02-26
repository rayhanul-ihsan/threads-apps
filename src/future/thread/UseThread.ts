import { ChangeEvent, useState } from 'react'
import { IThread } from '../../interface/user'
import { API } from '../../libs/api'

export default function UseThread() {
    const [form, setForm] = useState<IThread>({
        content: '',
        image: ''
    })

// function handleChange(e: ChangeEvent<HTMLInputElement>){
//     setForm({
//         ...form,
//         [e.target.name]: e.target.value,
//     })
// }

// async function handleThread() {
//     try {
//         console.log(form);
        
//         await API.post('/thread', form)
//     } catch (error) {
//         throw(error)        
//     }
// }

//     return {handleThread, handleChange}
}

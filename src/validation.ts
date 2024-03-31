import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

export const useLoginValidation = () => {
    const initialValues = {
        user_name: '',
        password: ''
    }

    const schema = yup.object().shape({
        user_name: yup.string().required("please enter user name").min(3, "user name must be at least 3 characters"),
        password: yup.string().required("please enter password").min(8, "password must be at least 8 characters")
    })

    const {control, handleSubmit} = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema), 
        mode: 'all',
        reValidateMode: 'onChange'
    })
    return {control, handleSubmit}
}
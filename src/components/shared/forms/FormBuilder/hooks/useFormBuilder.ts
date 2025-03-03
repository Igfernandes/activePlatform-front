import { useForm } from "react-hook-form"


export function useFormBuilder(){
    const {register, handleSubmit} = useForm()

    return {
        register,
        handleSubmit
    }
}
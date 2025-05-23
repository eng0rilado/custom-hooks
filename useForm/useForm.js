import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };


    const onResetForm = () => {
        setFormState({
            ...initialForm
        });
    }

    return {
            ...formState, //Cada elemento del objeto
            formState, //El objeto al completo
            onResetForm,
            onInputChange};
}

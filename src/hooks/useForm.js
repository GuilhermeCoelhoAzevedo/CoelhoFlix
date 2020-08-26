import { useState } from 'react';

function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }
    
    function handleChange(event) {
        setValue(   
            event.target.getAttribute('name'), 
            event.target.value
        );
    }

    function clearForm() { 
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
    };
}

export default useForm;
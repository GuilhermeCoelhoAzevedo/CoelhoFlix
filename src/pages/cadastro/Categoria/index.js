import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
    }
    
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias'; 
        fetch(URL)
        .then(async (respostaDoServer) =>{
            const resposta = await respostaDoServer.json();
            console.log(resposta);
            setCategorias([
                ...resposta,
            ]);
        })
    }, []);

    return (
        <PageDefault>
            <h1>New category: {values.titulo}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]); 
                
                clearForm();
            }}>

                <FormField
                    label="Category name"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="Description"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Color"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
        
                <Button>
                    Save
                </Button>
            </form>
    
            <ul>
                {categorias.map((categoria) => {
                    return(
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
            Home
            </Link>
      </PageDefault>
    )
}   

export default CadastroCategoria;
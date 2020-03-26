import React, {useState} from 'react';
import Error from './Error'

const Formulario = ({guardarPalabraBusqueda}) => {

    const [palabraClave, guardarPalabraClave] = useState('')
    const [error, guardarError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // Validar formulario

        if (palabraClave === ''){
            guardarError(true)
            return;
        }

        //formulario correcto

        guardarError(false) 
        guardarPalabraBusqueda(palabraClave)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control '
                        placeholder='Busca una imagen ejemplo: Café o Futbol'
                        onChange={e => guardarPalabraClave(e.target.value)}
                    />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>  
            {(error)?<Error mensaje='Debe agregar término de búsqueda'/> : null}             
        </form>
    );
};

export default Formulario;
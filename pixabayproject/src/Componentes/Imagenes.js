import React from 'react';
import Imagen from './Imagen';

const Imagenes = ({imagenes}) => {
    return (
        <div className='row p-5'>
            {imagenes.map(imagen => (
                <Imagen 
                    key = {imagen.id}
                    imagen = {imagen}
                />
            ))}
        </div>
    );
};

export default Imagenes;
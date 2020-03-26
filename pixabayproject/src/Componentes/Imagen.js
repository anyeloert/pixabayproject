import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, previewURL, views, likes} = imagen

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img 
                    src = {previewURL}
                    className = 'card-img'
                    alt = 'preview'
                />
                <div className='card-body'>
                    <p className='card-text'>{views} Vistas</p>
                    <p className='card-text'>{likes} Me Gusta</p>
                </div>
                <div className='card-footer'>
                    <a 
                        href={largeImageURL}
                        className='btn btn-primary btn-block'
                        target = '_blank'
                        rel = 'noopener noreferrer'>
                       VerImagen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Imagen;
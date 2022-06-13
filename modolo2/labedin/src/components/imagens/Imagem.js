import React from 'react';
import './ImagemPerfil.css'

function ImagemPerfil(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
         
        </div>
    )
}

export default ImagemPerfil;
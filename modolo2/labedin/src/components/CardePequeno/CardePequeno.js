import React from 'react';
import { Teste } from './CardePequeno.js';


function InformaçãoEmail(props) {
    return (
        <Teste>
       
            <div>
            <Testeimg src={ props.imagem } />
            </div>
            <Testeh5>{ props.texto }</Testeh5>
            <Testep>{ props.texto2 }</Testep>
           
        </Teste>
    )
}

export default InformaçãoEmail;
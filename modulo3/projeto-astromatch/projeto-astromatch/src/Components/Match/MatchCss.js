import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    border: 1px solid black;
    border: 5px solid black;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-image: linear-gradient(to right, black, red);
    border-image-slice: 1;
`

export const Imagem = styled.img`
    width: 300px;
    margin-top: 10px;
    border-radius: 50%;
`

export const Separacao = styled.div`
    border: 1px solid #808080;
    margin: 15px;
`
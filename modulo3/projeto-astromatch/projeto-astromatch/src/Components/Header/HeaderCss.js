import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    border: 1px solid black;
    border: 5px solid black;
    border-bottom: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-image: linear-gradient(to right, black, red);
    border-image-slice: 1;
`

export const Titulo = styled.h1`
    background-image: linear-gradient( black, red);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const BotaoHeader = styled.button`
    position:relative;
    transition: all .2s ease-in-out;
    width: 150px;
    border-radius: 30px;
    padding: 5px;
    background-color: black;
    border-color: red;
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
    :hover{
    top:-4px;
    box-shadow:0 4px 3px #999;
    background-color: white;
    color: #7fbfb2;
}
`
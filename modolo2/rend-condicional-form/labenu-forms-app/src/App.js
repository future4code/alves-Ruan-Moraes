import './App.css';
import React, { Component } from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';
import styled from './styled-componets';


const ConteinerTelaGrande = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Botao = styled.button`
margin-top: 2%;
`

class app extends Component {
  state = {
    tela: 1,
  }


  ExibirNaTela = () => {
    switch (this.state.tela) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4: 
       return <Etapa4 />
    }

  }

  ProximaPagina = () => {
    this.setState({ tela: this.state.tela + 1 })
  }

  render() {
    return (
      <ConteinerTelaGrande>
        {this.ExibirNaTela()}

        {
          this.state.tela !== 4 &&
          <Botao OnClick={() => this.ProximaPagina()}> Proxima Pagina </Botao>
        }

      </ConteinerTelaGrande>
    )
  }
}
export default app;











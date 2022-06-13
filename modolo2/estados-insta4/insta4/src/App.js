import { findByLabelText } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulariodepost = styled.section`
 display: flex;
 justify-content:center;
 align-items:center;
 




`

class App extends React.Component {
  state = {
    pessoa: [
      {
        nomeUsuario: 'Paula',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Marcelo',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Clara',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },

    ],


    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""


  }

  adicionaPost = () => {
    const gerandoPost = {
      nomeUsuario: this.state.valorInputNome,
      nomeUsuario: this.state.valorInputFotoUsuario,
      nomeUsuario: this.state.valorInputFotoPost,

    }
    const novoPost = [...this.state.pessoa, gerandoPost]
    this.setState({
      pessoa: novoPost,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    })
  }

  onChangeInputNome = (event) => {
    this.setState({
      valorInputNome: event.target.value
    })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value
    })
  }

  render() {
    const listaDePost = this.state.pessoa.map((Post, indice) => {
      return <Post key={indice}
        nomeUsuario={Post.nomeUsuario}
        fotoUsuario={Post.fotoUsuario}
        fotoPost={Post.fotoPost} />

    })
    return (
      <MainContainer>

        <h1>Criação de Post</h1>

        <Formulariodepost>

          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome Usuario"} />

          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"link Foto Usuario"} />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"link Foto Usuario"} />

          <button onClick={this.adicionaPost}>Adicionar</button>

        </Formulariodepost>

        {listaDePost}

      </MainContainer>
    );
  }
}

export default App;

import React, { Component } from 'react'
import styled from "styled-components";



const EstiloCaixa = styled.div`
display:flex;
flex-direction:center;
text-align:center;
`
 class Etapa1 extends Component{
  state = {
    valorInputNome:"",
    valorInputEmail:"",
    valorInputIdade:"",

    valorSelecionado:"",

  }
  onChangeInputNome= (event)=>{
    this.setState({
      valorInputNome:event.target.value
    })
  }

  onChangeInputEmail= (event)=>{
    this.setState({
      valorInputEmail:event.target.value
    })
  }

  onChangeInputIdade= (event)=>{
    this.setState({
      valorInputIdade:event.target.value
    })
  }

  onChangeInputSelecionado= (event)=>{
    this.setState({
      valorInputSelecionado:event.target.value
    })
  }

  render(){
    return(
      <EstiloCaixa>
        <h1>Etapa1 - Dados Gerais </h1>
        <h4>1. Qual o seu nome ?</h4>
        <input
        value={this.state.valorInputNome}
        placeholder={"Nome"}
        onChange={this.onChangeInputNome}

        />

        <h4>2. Qual a Sua Idade?</h4>
        <input
        value={this.state.valorInputIdade}
        placeholder={"Idade"}
        onChange={this.onChangeInputIdade}

        />

        <h4>3. Qual o seu Email?</h4>
        <input
        value={this.state.valorInputEmail}
        placeholder={"Email"}
        onChange={this.onChangeInputEmail}

        />
        <h4>4. Qual a sua Escolaridade?</h4>
        <select onChange={this.onChangeInputSelecionado}>
          <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>
          <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
          <option value="Ensino Superior Completo">Ensino Superior Completo</option>
       

        </select>



      </EstiloCaixa>
    )
  }

}
export default Etapa1;
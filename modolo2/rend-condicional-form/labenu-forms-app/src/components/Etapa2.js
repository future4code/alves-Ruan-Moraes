import React, { Component } from 'react'
import styled from 'styled-components'

const EstiloCaixa = styled.div`
display:flex;
flex-direction:column;
text-align:center;
align-items: center;
`
class Etapa2 extends Component {
    state = {
        valorInputCurso: "",
        valorInputUnidadeEnsino: "",

    }

    onChangeInputCurso = (event) => {
        this.setState({
            valorInputCurso: event.target.value
        })
    }

    onChangeInputUnidadeEnsino = (event) => {
        this.setState({
            valorInputUnidadeEnsino: event.target.value
        })
    }

    render() {
        return (
            <EstiloCaixa>
                <h1>ETAPA 2 - INFORMAÇÃOES DO ENSINO SUPERIOR </h1>
                <h4>5. Qual o Curso?</h4>
                <input
                    value={this.state.valorInputCurso}
                    placeholder={"Curso"}
                    onChange={this.onChangeInputCurso}

                />
                <h4>6. Qual a unidade de ensino? </h4>
                <input
                    value={this.state.valorInputUnidadeEnsino}
                    placeholder={"UnidadeEnsino"}
                    onChange={this.onChangeInputUnidadeEnsino}

                />
            </EstiloCaixa>
        )
    }
}
export default Etapa2;


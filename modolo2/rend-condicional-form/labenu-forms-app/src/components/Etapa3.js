import React, {Component} from "react"
import styled from "styled-components"

const EstiloCaixa = styled.div`
display:flex;
flex-direction:column;
text-align:center;
align-items: center;
`
class Etapa3 extends Component {
    state = {
        valorInputGraduação: "",
        valorInputSelecionado: "",

    }

    onChangeInputGraduação = (event) => {
        this.setState({
            valorInputGraduação: event.target.value
        })
    }

    onChangeInputSelecionado = (event) => {
        this.setState({
            valorInputSelecionado: event.target.value
        })
    }

    render() {
        return (
            <EstiloCaixa>
                <h1>ETAPA 3 - INFORMAÇÃOES GERAIS DE ENSINO </h1>
                <h4>7. Por que você não terminou um curso de graduação?</h4>
                <input
                    value={this.state.valorInputCurso}
                    placeholder={"Motivo"}
                    onChange={this.onChangeInputCurso}

                />
                <h4>8. Você fez algum curso complementar? </h4>
               <section onChange={this.onChangeInputSelecionado}>
                <option value={"Curso técnico"}>Curso técnico</option>
                <option value={"Cursos de inglês"}>Cursos de inglês</option>
                <option value={"Não fiz curso complementar"}>Não fiz curso complementar</option>
                
               </section>
            </EstiloCaixa>
        )
    }
}
export default Etapa3;
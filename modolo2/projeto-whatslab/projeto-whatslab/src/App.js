import React from "react";
import './App.css'
class Chat extends React.Component {
  state = {

    pessoas: [
      {
        nome: "",
        message: ""
      },
      {
        nome: "",
        message: ""
      }
    ],

    valorInputPessoa: "",
    valorInputMessage: ""
  };

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputPessoa,
      message: this.state.valorInputMessage
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];
    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = (event) => {

    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMessage = (event) => {

    this.setState({ valorInputMessage: event.target.value });
  };

  

  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nome} : {pessoa.message}
        </p>
      );
    });

    return (
      <div className="chatSquare">
        <div>
          <div>{listaDeComponentes}</div>
          <input

            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <input
            className="textInput"
            value={this.state.valorInputMessage}
            onChange={this.onChangeInputMessage}
            placeholder={"Mensagem"}
          />
          <button className="buttonSend" onClick={this.adicionaPessoa}>Enviar</button>
        </div>

      </div>
    );
  }
}

export default Chat;

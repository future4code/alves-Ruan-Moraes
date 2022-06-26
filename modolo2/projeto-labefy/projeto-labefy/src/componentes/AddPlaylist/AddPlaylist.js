import React from "react";
import axios from "axios";


export default class AddPlaylist extends React.Component {

    state = {
        adicionaPlay: ""
    }

    onChangeAdicionaPlay = (event) => {
        console.log("entrou addplay")
        this.setState({ adicionaPlay: event.target.value })
    }


    onClickAdicionaPlay = () => {
        console.log("entrou em onclic")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.adicionaPlay
        }
        axios.post(url, body, {
            headers: { Authorization: "ruan-marques-alves" }
        })
            .then((resposta) => {
                resposta.status === 200 && alert("Playlist adicicona!")
            })
            .catch((erro) => {
                console.log(erro.response.data.message)
                erro . resposta . dados . message  ===  "Já existe uma playlist com um nome semelhante."  &&  alert ( "Jaexiste uma playlist com esse nome." )
                erro . resposta . dados . message  ===  "Nome ou token de autenticação estão ausentes"  &&  alert ( "O campo esta vazio ." )

            })

        this.setState({ adicionaPlay: "" })

    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onChangeAdicionaPlay}
                    value={this.state.adicionaPlay}
                    placeholder="Adicionar playlist"
                />
                <button onClick={this.onClickAdicionaPlay}>Adicionar Play List</button>
            </div>
        )
    }
} 
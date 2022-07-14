import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Imagem, Separacao } from './MatchCss'
import { BotaoHeader } from '../Header/HeaderCss'


export default function Match(props) {

  const [perfil, setPerfil] = useState([])


  useEffect(() => {
    getMatches('ruan')
  }, [props.controlador])


  const getMatches = function (aluno) {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then((resposta) => {
        setPerfil(resposta.data.matches)
      }).catch((erro) => {

        alert(`Foi encontrado o seguinte erro: ${erro.message}`)
      })

  }



  return (
    <Container>
      {perfil.map((match, index) => {
        return <div key={index}>
          <Imagem src={match.photo} alt={match.photo_alt} />

          <p><strong>{match.name}</strong></p>
          <Separacao />
        </div>
      })}

      <br />
      <p>Excluir todos os perfis.</p>
      <BotaoHeader onClick={() => props.limparPerfil('ruan')}>Limpar Matchs</BotaoHeader>
    </Container>
  )
}


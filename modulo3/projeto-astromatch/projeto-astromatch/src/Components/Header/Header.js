import React, { useState, useEffect } from 'react'

import { Container, BotaoHeader, Titulo } from './HeaderCss'

export default function Header(props) {

    const [nomeButao, setNomeButao] = useState(true)
    useEffect(() => {
        setNomeButao(props.nameBotao)
    }, [props.nameBotao])
    return (
        <Container>
            <Titulo>ASTROMATCH</Titulo>
          
            <BotaoHeader onClick={props.trocaTela}>{nomeButao ? 'Seus matches' : 'Ir para Perfis'}</BotaoHeader>
        </Container>
    )
}

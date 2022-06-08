import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/imagens/fotoperfil.png.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPerfil}
          nome="Ruan Marques"
          descricao="Oi, eu sou Ruan Marques. Tenho 26 anos e Sou estudante da Labenu, Turma Alves."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/64/64673.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <InfoPessoal
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          texto="E-mail:" texto2="ruanmarques96@gmail.com"
          />


         <InfoPessoal
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          texto="E-mail:" texto2="ruanmarques96@gmail.com"
               
        />
       
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Ruan"
          descricao="Estou Estudando front and e já finalizamos o modolo 1 !"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

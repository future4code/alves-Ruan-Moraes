import { useState, useEffect } from 'react';
import axios from "axios";


export default function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  useEffect(() => {

    const pegaPokemon = (pokeName) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((res) => {
        setPokemon(res.data);
      }).catch((err) => {
        console.log(err);
      });
    };

    pegaPokemon(props.pokeName);
  }, [props.pokeName]);

  return (
    <figure>
      {/* Passo 4d */}
      <h2>{pokemon.name}</h2>
      {/* Passo 4d */}
      <p>Peso: {pokemon.weight} Kg</p>
      {/* Passo 4d */}
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {/* Passo 4d */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};


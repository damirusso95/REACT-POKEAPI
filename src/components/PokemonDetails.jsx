import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  // useParams() otteniamo l'ID dal URL
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      // richiesta all'API con id
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data); 
    };

    fetchPokemonDetails();
  }, [id]); 

  if (!pokemon) {
    return <div>Caricamento...</div>; 
  }
  return (
    <div className="pokemon-detail-card">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <div className="pokemon-info">
        <h3>Abilità:</h3>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>

        <h3>Statistiche:</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;


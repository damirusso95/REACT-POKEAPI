// hook
import React, { useEffect, useState } from "react";

function PokemonList() {
    // variabile di stato per memorizzare i pokemon
    const [pokemons, setPokemons] = useState([]);

    // variabile di stato per la ricerca per nome
    const [serchName, setSerchName] = useState('');

    // funzione per API
    useEffect(() => {

        const fetchPokemon = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokedex/1");

            // convertiamo la risposta in json
            const data = await response.json();

            // aggiorno lo stato della lista pokemon
            setPokemons(data.pokemon_entries);
        };

        fetchPokemon();
    }, []);

    return (
        <div>
            <h2>Lista Pokémon</h2>

            {/* input per la ricerca nome */}
            <input type="text" placeholder="Cerca un Pokemon..." value={serchName} onClick={setSerchName} />


            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.entry_number}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                            alt={pokemon.pokemon_species.name}
                        />
                        <p>{pokemon.pokemon_species.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;

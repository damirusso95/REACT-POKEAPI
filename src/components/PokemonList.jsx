import React, { useEffect, useState } from "react";

function PokemonList() {
    // variabile di stato per memorizzare i pokemon
    const [pokemons, setPokemons] = useState([]);

    // variabile di stato per la ricerca per nome
    const [searchName, setSearchName] = useState("");

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

    // Se la barra di ricerca è vuota, mostriamo tutti i Pokémon
    const filteredPokemons = searchName
        ? pokemons.filter((pokemon) =>
            pokemon.pokemon_species.name.toLowerCase().includes(searchName.toLowerCase())
        )
        : pokemons;

    return (
        <div>
            <h2>Lista Pokémon</h2>

            {/* Barra di ricerca */}
            <input
                type="text"
                placeholder="Cerca un Pokémon..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />

            {/* Mostriamo SOLO i Pokémon filtrati o tutti se la ricerca è vuota */}
            <ul>
                {filteredPokemons.map((pokemon) => (
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

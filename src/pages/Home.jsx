import React from 'react'
import PokemonList from '../components/PokemonList';

function Home() {
    return (
        <>
            <h1>Pokedex Kanto</h1>
            <div className="home-container">
                <PokemonList />
            </div>
        </>
    );
}

export default Home;

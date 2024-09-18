import React, { useEffect } from 'react'
import PokemonCard from '../../components/cards/PokemonCard/index'
import TopoBar from '../../components/topoBar';
import SearchBar from '../../components/searchBar';

import { HomeContianer, WrapCard } from './Home-styles';
import HandleSearchResuntlsAndNewCard from '../../components/resultsAndCreateCard';

import { useState } from 'react';
import loadPokemon from '../../utils/loadPokemon';


const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = await loadPokemon();
      setPokemons(pokemonData)
    };
    fetchPokemons();

  }, []);



  return (
    <HomeContianer>
      <TopoBar />
      <SearchBar />
      <HandleSearchResuntlsAndNewCard />
      <WrapCard>
        {pokemons.map((pokemon) => {
          return (
            < PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          );

        })}
      </WrapCard>
    </HomeContianer>
  );
};

export default Home;

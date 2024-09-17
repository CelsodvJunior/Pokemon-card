import React from 'react'
import PokemonCard from '../../components/cards/PokemonCard/index'
import TopoBar from '../../components/topoBar';
import SearchBar from '../../components/searchBar';

import { HomeContianer, WrapCard } from './Home-styles';
import HandleSearchResuntlsAndNewCard from '../../components/resultsAndCreateCard';


const Home = () => {
  return (
    <HomeContianer>
      <TopoBar />
      <SearchBar />
      <HandleSearchResuntlsAndNewCard />
      <WrapCard>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </WrapCard>
    </HomeContianer>
  );
};

export default Home;

import React from 'react'
import PokemonCard from '../../components/cards/PokemonCard/index'
import TopoBar from '../../components/topoBar';
import SearchBar from '../../components/searchBar';

import { HomeContianer, WrapCard } from './Home-styles';


const Home = () => {
  return (
    <HomeContianer>
      <TopoBar />
      <SearchBar />
      <WrapCard>
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

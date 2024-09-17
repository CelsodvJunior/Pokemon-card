import React from 'react'
import PokemonCard from '../../components/cards/PokemonCard/index'
import TopoBar from '../../components/topoBar';

import { HomeContianer } from './Home-styles';
import SearchBar from '../../components/searchBar';

const Home = () => {
  return (
    <HomeContianer>
      <TopoBar />
      <SearchBar />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </HomeContianer>
  );
};

export default Home;

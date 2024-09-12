import React from 'react'
import PokemonCard from '../../components/cards/PokemonCard'
import styled from 'styled-components'

const HomeContainer = styled.section`
  align-iten: center;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <PokemonCard />
    </HomeContainer>
  );
};

export default Home;

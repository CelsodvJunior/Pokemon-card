import PokemonCard from "../../components/PokemonCard/index";
import TopoBar from "../../components/topoBar";
import SearchBar from "../../components/searchBar";

import { HomeContianer, WrapCard } from "./Home-styles";
import HandleSearchResuntlsAndNewCard from "../../components/resultsAndCreateCard";

import { useState, useEffect } from "react";
import loadPokemon from "../../utils/loadPokemon";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = await loadPokemon();
      setPokemons(pokemonData);
      setAllPokemons(pokemonData);
    };
    fetchPokemons();
  }, []);

  const PokemonFilter = (name) => {
    if (name === "") {
      setPokemons(allPokemons);
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      setPokemons(filteredPokemons);
    }
  };

  return (
    <HomeContianer>
      <TopoBar />
      <SearchBar PokemonFilter={PokemonFilter} />
      <HandleSearchResuntlsAndNewCard />
      <WrapCard>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </WrapCard>
    </HomeContianer>
  );
};

export default Home;

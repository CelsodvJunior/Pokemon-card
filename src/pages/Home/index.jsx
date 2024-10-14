import { useEffect, useState } from "react";
import BarraLogo from "../../components/BarraLogo";
import Button from "../../components/Button";
import CardPokemon from "../../components/CardPokemon";
import SearchField from "../../components/SearchField";
import loadPokemon from "../../utils/loadPokemon";
import { Container, P, WrapperCard, WrapperNewCard } from "./style";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonData = await loadPokemon();
        setPokemons(pokemonData);
        setAllPokemons(pokemonData);
      } catch (error) {
        console.error("Failed to fetch Pokémons data:", error);
      }
    };
    fetchPokemons();
  }, []);

  const PokemonFilter = (name) => {
    if (name === "") {
      setPokemons(allPokemons);
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(name.toLowerCase());
      });
      setPokemons(filteredPokemons);
    }
  };

  return (
    <Container>
      <BarraLogo />
      <SearchField PokemonFilter={PokemonFilter} />
      <WrapperNewCard>
        <P>Search result...</P>
        <Link to="/newcard">
          <Button>New Card</Button>
        </Link>
      </WrapperNewCard>
      <WrapperCard>
        {pokemons.map((pokemon) => {
          return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </WrapperCard>
    </Container>
  );
};

export default Home;

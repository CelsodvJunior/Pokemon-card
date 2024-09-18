import axios from "axios";
const loadPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    const pokemonList = response.data.results;

    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonDetails = pokemonResponse.data;
        return {
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.front_default,
        };
      })
    );

    return pokemonData;
  } catch (error) {
    console.error('Error on get pokemons datas', error);
    throw error;
  }
};

export default loadPokemon


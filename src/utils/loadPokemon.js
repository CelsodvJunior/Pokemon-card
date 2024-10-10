const loadPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon list");
    }
    const data = await response.json();
    const pokemonList = data.results;

    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }
        const pokemonDetails = await pokemonResponse.json();
        return {
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.front_default,
        };
      }),
    );

    return pokemonData;
  } catch (error) {
    console.error("Error on get pokemons data", error);
    throw error;
  }
};

export default loadPokemon;

const loadPokemon = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  const pokemonData = response.data

  console.log(pokemonData)

};

loadPokemon()

export default loadPokemon


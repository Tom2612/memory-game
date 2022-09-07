const generatePokemon = (n) => {
    const pokemonList = {};
    for (let i = 1; i < n+1; i++) {
        pokemonList[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    }
    return pokemonList
}

export default generatePokemon;

const pokemonList = document.getElementById('pokemonInfo')

const maxRecords = 200
const limit = 10
let offset = 0;


function convertPokemonToDados(pokemon) {
    return `
    <div>
        <span class="numero">#${pokemon.number}</span>
        <h1>${pokemon.name}</h1>

        <span class="Skill">Grass</span>
        <span class="Skills">Poison</span>
        <div class="img-container">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    `;
}

function loadPokemonItens(offset = 1, limit = 1) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        if (pokemons.length > 0) {
            const pokemon = pokemons[0];
            const pokemonInfoHTML = convertPokemonToDados(pokemon);
            document.getElementById("pokemonInfo").innerHTML = pokemonInfoHTML;
        }
    });
}

loadPokemonItens(offset, limit)

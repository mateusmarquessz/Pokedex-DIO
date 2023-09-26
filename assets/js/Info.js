const pokemonList = document.getElementById('pokemonInfo')

const maxRecords = 200
const limit = 10
let offset = 0;


function convertPokemonToDados(pokemon) {
    return `
    <div class="pokemon ${pokemon.type}" onclick="expandPokemon(this)">
        <span class="numero">#${pokemon.number}</span>
        <h1>${pokemon.name}</h1>
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        <div class="img-container">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        `;
}

function loadPokemonItens() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    pokeApi.getPokemomById(id).then((pokemon) => {
            const pokemonInfoHTML = convertPokemonToDados(pokemon);
            document.getElementById("pokemonInfo").innerHTML = pokemonInfoHTML;
    });
}

loadPokemonItens()
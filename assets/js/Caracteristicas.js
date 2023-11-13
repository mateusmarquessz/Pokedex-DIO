function convertPokemonToCaract(pokemon) {
    return `
    <div>
        <table border="1">
            <tbody>
                <tr>
                    <td>Category</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>${pokemon.height}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>${pokemon.weight}</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>${pokemon.abilities}</td>
                </tr>
                <tr>
                    <td class="breeding"><h2>Breeding</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Egg Groups</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Egg Cycle</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
`;
}

function loadPokemonCaract() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    pokeApi.getPokemomById(id).then((pokemon) => {
            const pokemonInfoHTML = convertPokemonToCaract(pokemon);
            document.getElementById("pokemonsDados").innerHTML = pokemonInfoHTML;
    });
}

loadPokemonCaract()
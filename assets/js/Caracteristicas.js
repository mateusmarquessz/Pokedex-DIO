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
                    <td></td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="breeding"><h2>Breeding</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>a</td>
                </tr>
                <tr>
                    <td>Egg Groups</td>
                    <td>${pokemon.name}</td>
                </tr>
                <tr>
                    <td>Egg Cycle</td>
                    <td>a</td>
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
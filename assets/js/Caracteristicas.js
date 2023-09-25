function convertPokemonToDados(pokemon) {
    return `
    <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Species</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>a</td>
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
                        <td> Monster</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td>Grass</td>
                        <td>a</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function loadPokemonDados(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const pokemon = pokemons[0];
        
        const pokemonDadosHTML = convertPokemonToDados(pokemon);
        document.getElementById("pokemonsDados").innerHTML = pokemonDadosHTML;
    });
}

loadPokemonDados(offset, limit);
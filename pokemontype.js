/*
[{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]
-> ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon." 
*/
/*
function  name: pokemonType
parameters:
    - info: array contraining object
return: string[]

*/

/**
 * 
 * @param {anything[]} Pokemon 
 * @returns - array containing string descript of pokemons 
 */

function pokemonType(Pokemon){

    const pokemonDescription = []
    let speciesDescription = ""

    for (let species of Pokemon){

        speciesDescription = `${species.name} is a ${species.type} Pokémon.`

        pokemonDescription.push(speciesDescription)

    }

    return PokemonDescription

}

pokemonType([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }])
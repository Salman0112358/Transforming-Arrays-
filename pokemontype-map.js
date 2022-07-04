
function pokemonType(Pokemon){

    const pokemonDescription = []
    let speciesDescription = ""
    const mappedArray = Pokemon.map(x => `${x.name} is a ${x.type} type Pokémon.`)
    //console.log(mappedArray)
    return mappedArray
}

console.log(pokemonType([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]))
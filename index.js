const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
      primary: "Static",
      hidden: "Lightning rod",
    },
    stats: {
      hp: 35,
      attack: 55,
      deffense: 40,
      speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
    modifiers: {
      weakness: ["ground"],
      resistances: ["electric", "flying", "water", "steel"],
    },
  };

  const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}
  function ordenarPorHP(pokemonArray){
    return pokemonArray.splice().sort((a, b) => a.stats.hp - b.stats.hp);
  }
const pokemonArray = [pikachu , bulbasaur]
const PokemonOrdenadosPorHP = ordenarPorHP(pokemonArray)
console.log(PokemonOrdenadosPorHP);  
for(const pokemon of PokemonOrdenadosPorHP){
console.log(`${pokemon.mane} - HP: ${pokemon.stats.hp}`);
}
 
function tieneFuegoYAgua(pokemonArray) {
    let tieneTipoFuego = false;
    let tieneTipoAgua = false;
  
    for (const pokemon of pokemonArray) {
      if (pokemon.type === "fire") {
        tieneTipoFuego = true;
      }
      if (pokemon.type === "water") {
        tieneTipoAgua = true;
      }
    }
  
    return tieneTipoFuego && tieneTipoAgua;
  }
  const tieneFuegoYAguaEnLista = tieneFuegoYAgua(pokemonArray);
  console.log(tieneFuegoYAguaEnLista);
  
  function encontrarExtremosStats(pokemon) {
    let minStat = Number.MAX_SAFE_INTEGER;
    let maxStat = Number.MIN_SAFE_INTEGER;
    let minStatNombre = "";
    let maxStatNombre = "";
  
    for (const [nombreStat, valorStat] of Object.entries(pokemon.stats)) {
      if (valorStat < minStat) {
        minStat = valorStat;
        minStatNombre = nombreStat;
      }
      if (valorStat > maxStat) {
        maxStat = valorStat;
        maxStatNombre = nombreStat;
      }
    }
  
    return {
      statBajoNombre: minStatNombre,
      statBajoValor: minStat,
      statAltoNombre: maxStatNombre,
      statAltoValor: maxStat,
    };
  }
  
  
  const extremosStatsPikachu = encontrarExtremosStats(pikachu);
  console.log("Pikachu:", extremosStatsPikachu);
  
  const extremosStatsBulbasaur = encontrarExtremosStats(bulbasaur);
  console.log("Bulbasaur:", extremosStatsBulbasaur);
  
  
  
  
  
  
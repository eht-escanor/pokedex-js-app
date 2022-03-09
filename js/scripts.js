pokemonList = [
  {
    name: "Bulbasaur",
    type: ["Seed"],
    height: 0.7,
  },
  {
    name: "Squirtle",
    type: ["Water"],
    height: 0.5,
  },
  {
    name: "Charmander",
    type: ["Fire"],
    height: 0.6,
  },
  {
    name: "Charizard",
    type:["Fire"],
    height: 1.7,
  }
]
//iterate through list of pokemon and display name and height
// for (let i = 0; i < pokemonList.length; i++){
// //conditional to test for height to print "- Wow that's big!"
//   if (pokemonList[i].height > 1.0){
//     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "- Wow that's big! <br/>");
//   }else {
//     document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "<br/>");
//   }
// };

//forEach equivalent of above code
pokemonList.forEach(function(pokemon){
  if (pokemon.height > 1.0) {
    document.write(pokemon.name + " (height: " + pokemon.height + ") " + "- Wow that's big! <br/>");
  }else {
    document.write(pokemon.name + " (height: " + pokemon.height + ") " + "<br/>");
  }
})
// var numberOfPokemon = 12;

// var gen = new buildArray(numberOfPokemon);


// gen[1] = "Bulbasaur";
// gen[2] = "Ivysaur";
// gen[3] = "Venusaur";
// gen[4] = "Charmander";
// gen[5] = "Charmeleon";
// gen[6] = "Charizard";
// gen[7] = "Squirtle";
// gen[8] = "Wartortle";
// gen[9] = "Blastoise";
// gen[10] = "Caterpie";
// gen[11] = "Metapod";
// gen[12] = "Butterfree";


// function buildArray(size){
// this.length = size
// for (var i = 1; i <= size; i++){
// this[i] = null}
// return this
// }

// function pickRandomNum() {
// var poke = Math.ceil(Math.random() * numberOfPokemon); 
// console.log(poke);
// }

// document.getElementById("pokemonGen").onclick= function () {
//    pickRandomNum();
// }



 
  
var gen = ["Bulbasaur #1", "Ivysaur #2", "Venusaur #3", "Charmander #4", "Charmeleon #5", "Charizard #6", "Squirtle #7", "Wartortle #8", "Blastoise #9", "Caterpie #10", "Metapod #11", "Butterfree #12", "Weedle #13", "Kakuna #14", "Beedrill #15", "Pidgy #16", "Pidgeotto #17", "Pidgeot #18", "Rattata #19", "Raticate #20", "Spearow #21", "Fearow #22", "Ekans #23", "Arbok #24", "Pikachu #25"];

function randomPokemon() {
    document.getElementById("pokemonGen").value = gen[Math.floor(Math.random() * gen.length)];
}


// var randomPokemon = gen[Math.floor(Math.random()*gen.length)];

// document.getElementById("pokemonGenerator").innerText = randomPokemon;

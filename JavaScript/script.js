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



 
  
var gen = ["Bulbasaur #1", "Ivysaur #2", "Venusaur #3", "Charmander #4", "Charmeleon #5", "Charizard #6", "Squirtle #7", "Wartortle #8", "Blastoise #9", "Caterpie #10", "Metapod #11", "Butterfree #12", "Weedle #13", "Kakuna #14", "Beedrill #15", "Pidgy #16", "Pidgeotto #17", "Pidgeot #18", "Rattata #19", "Raticate #20", "Spearow #21", "Fearow #22", "Ekans #23", "Arbok #24", "Pikachu #25", "Raichu #26", "Sandshrew #27", "Sandslash #28", "Nidoran-F #29", "Nidorina #30", "Nidoqueen #31", "Nidoran-M #32", "Nidorino #33", "Nidoking #34", "Clefairy #35", "Clefable #36", "Vulpix #37", "Ninetales #38", "Jigglypuff #39", "Wigglytuff #40", "Zubat #41", "Golbat #42", "Oddish #43", "Gloom #44", "Vileplume #45", "Paras #46", "Parasect #47", "Venonat #48", "Venomoth #49", "Diglet #50", "Dugtrio #51", "Meowth #52", "Persian #53", "Psyduck #54", "Goldduck #55", "Mankey #56", "Primeape #57", "Growlithe #58", "Arcanine #59", "Poliwag #60", "Poliwhirl #61","Poliwrath #62", "Abra #63", "Kadabra #64", "Alakazam #65", "Machop #66", "Machocke #67", "Machamp #68", "Bellsprout #69", "Weepinbell #70", "Victreebel #71", "Tentacool #72", "Tentacruel #73", "Geodude #74", "Graveler #75","Golem #76", "Ponyta #77", "Rapidash #78", "Slowpoke #79", "Slowbro #80", "Magnemite #81", "Magneton #82", "Farfetch'd #83", "Doduo #84", "Dodrio #85", "Seel #86", "Dewgong #87", "Grimer #88", "Muk #89", "Shellder #90", "Cloyster #91", "Gastly #92", "Haunter #93", "Gengar #94", "Onix #95", "Drowzee #96", "Hypno #97", "Krabby #98", "Kingler #99", "Volotorb #100", "Electrode #101", "Exeggecute #102", "Exeggutor #103", "Cubone #104", "Marowak #105", "HItmonlee #106", "Hitmoncha #107", "Lickitung #108", "Koffing #109", "Weezing #110", "Ryhorn #111", "Rhydon #112", "Chansey #113", "Tangela #114", "Kangaskhan #115", "Horsea #116", "Seadra #117", "Golden #118","Seaking #119", "Staryu #120", "Starmie #121", "Mr.Mime #122", "Scyther #123", "Jynx #124", "Electabuzz #125", "Magmar #126", "Pinsir #127", "Tauros #128", "Magikarp #129", "Gyarados #130", "Lapras #131", "Ditto #132", "Eevee #133", "Vaporeon #134", "Jolteon #135", "Flareon #136", "Porygon #137", "Omanyte #138", "Omastar #139", "Kabuto #140", "Kaputops #141", "Aerodactyl #142", "Snorlax #143", "Articuno #144", "Zapdos #145", "Moltres #146", "Dratini #147", "Dragonair #148", "Dragonite #149", "Mewtwo #150", "Mew #151"];

function randomPokemon() {
    document.getElementById("pokemonGen").value = gen[Math.floor(Math.random() * gen.length)];
}


// var randomPokemon = gen[Math.floor(Math.random()*gen.length)];

// document.getElementById("pokemonGenerator").innerText = randomPokemon;

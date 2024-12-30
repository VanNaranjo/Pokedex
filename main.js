function getJSONSync(url) {
    var resp = "";
    var xmlHttp = new XMLHttpRequest();

if (xmlHttp !== null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    resp = xmlHttp.responseText;
}

return resp;
}

  function getDataSync() {
    var tempURL =
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    var jsonData = getJSONSync(tempURL);
    var obj = JSON.parse(jsonData);
    var pokemons = obj.pokemon;

    return (pokemons = JSON.parse(getJSONSync(tempURL)).pokemon);
}

function retrievePokemonById(pokemonId) {
var pokemons = getDataSync();
for (var i = 0; i < pokemons.length; i++) {
    if (pokemonId == pokemons[i].id) {
    return pokemons[i];
    }
}
}

function outputData(pokemon) {
var pNumber = document.getElementById("pNumber");
var pName = document.getElementById("pName");
var pHeight = document.getElementById("pHeight");
var pWeight = document.getElementById("pWeight");
var pImage = document.getElementById("pImage");

pNumber.innerHTML = pokemon.num;
pName.innerHTML = pokemon.name;
pHeight.innerHTML = pokemon.height;
pWeight.innerHTML = pokemon.weight;
pImage.src = pokemon.img;
pImage.setAttribute("alt", pokemon.name);
}


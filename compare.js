function getJSONSync(url) {
    let resp = "";
    let xmlHttp = new XMLHttpRequest();
  
    if (xmlHttp !== null) {
      xmlHttp.open("GET", url, false);
      xmlHttp.send();
      resp = xmlHttp.responseText;
    }
  
    return resp;
  }
  
  function getDataSync() {
    let tempURL =
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
  
    let jsonData = getJSONSync(tempURL);
    let obj = JSON.parse(jsonData);
    let pokemons = obj.pokemon;
  
    return (pokemons = JSON.parse(getJSONSync(tempURL)).pokemon);
  }
  
  function retrievePokemonById(pokemonId) {
    let pokemons = getDataSync();
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemonId == pokemons[i].id) {
        return pokemons[i];
      }
    }
  }
  
  function outputData(pokemon, container) {
    const pNumber = container.querySelector("#pNumber");
    const pName = container.querySelector("#pName");
    const pHeight = container.querySelector("#pHeight");
    const pWeight = container.querySelector("#pWeight");
    const pImage = container.querySelector("#pImage");
  
    pNumber.innerHTML = pokemon.num;
    pName.innerHTML = pokemon.name;
    pHeight.innerHTML = pokemon.height;
    pWeight.innerHTML = pokemon.weight;
    pImage.src = pokemon.img;
    pImage.setAttribute("alt", pokemon.name);
  }
  
  
  
  // Add event listeners
  document.getElementById("retrieve").addEventListener("click", () => {
    const pokemonId = document.getElementById("pokemonId").value;
    const container = document.querySelector(".container");
    outputData(retrievePokemonById(pokemonId), container);
  });
  
  document.getElementById("retrieve2").addEventListener("click", () => {
    const pokemonId = document.getElementById("pokemonId2").value;
    const container = document.querySelector(".container2");
    outputData(retrievePokemonById(pokemonId), container);
  });
  
  
  
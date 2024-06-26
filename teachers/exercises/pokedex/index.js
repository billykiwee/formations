// Défini la couleur par rapport au type
const typesColor = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  stellar: "#FFD700",
  unknown: "#A8A77A",
};

/* 
Etape 1 : on fetch la liste des nom de pokémon 

La sortie ressemble à ça :
  [
    {
      name: "bulbizar",
      url: "https://pokeapi.co/api/v2/pokemon/1"
    },
    ...
  ]
*/
async function getListPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";
  return fetch(url)
    .then(async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data.results;
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("");
    });
}

/* 
Etape 2 : on fetch les url de chaques pokémon quon récupére dans getListPokemon() 

La sortie ressemble à ça :
  [
    {
    abilities: [ [Object], [Object] ],
      base_experience: 64,
      cries: {
        latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
        legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg'
      },
      forms: [ [Object] ],
      ....
    },
    ...
  ]
*/
async function fetchPokemons() {
  const listPokemons = await getListPokemon();
  const fetchedPokemon = [];

  for (let index = 0; index < listPokemons.length; index++) {
    const element = listPokemons[index];
    try {
      const res = await fetch(element.url);
      if (res.ok) {
        const data = await res.json();
        fetchedPokemon.push(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return fetchedPokemon;
}

/* 
Etape 3 : on affihce les pokémons fetché dans le container en itérant dans le tableau

 - On créer un model html qui sera la structure de la carte pokémon
    const model = `
      <img src="..." />
      <span class="number">N°...</span>
      <h3>...</h3>

      <div class="types">
        <span class="type" style="background-color: ..."/>
        <span class="type" style="background-color: ..."/>
      </div>
    `;
  - Ce model sera injecter dans une createElement("div") qui lui même sera injecter dans le container
*/
fetchPokemons().then((pokemons) => {
  const container = document.querySelector(".container");

  for (let i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];

    const model = `
      <img src="${element.sprites.front_default}" />
      <span class="number">N°${element.id}</span>
      <h3>${element.name}</h3>

      <div class="types">
        <span class="type" style="background-color: ${
          typesColor[element.types.at(0).type.name]
        }">${element.types.at(0).type.name}</span>
        
        ${
          element.types.at(1)
            ? `<span class="type" style="background-color: ${
                typesColor[element.types.at(1).type.name]
              }">${element.types.at(1).type.name}</span>`
            : ""
        }
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = model;
    div.className = "card_pokemon";

    container.appendChild(div);
  }
});

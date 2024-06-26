# Pokedex

### Comment récupérer et afficher les pokémons

> Après avoir vu les bases de JS, pour les pokemons, il faudra maitriser les API : [📚 Cours sur les API ici 📚](https://www.notion.so/API-592b9220faf84bad993a2df4e0ed7882)

On va utiliser l'api : https://pokeapi.co/

Points cours à voir avec l'élève

- Comprendre l'intérêt des API : tout le web est construit avec des API (BDD, site, réseaux sociaux etc...)

- Comprendre que le fetch simule les méthodes HTPP : POST GET PUT DELETE

- Comprendre qu'une API CRUD se réfère au requête HTTP
  > <table style="width:100%"><thead><tr><th>Opération CRUD</th><th>Méthode HTTP</th></tr></thead><tbody><tr><td>Create</td><td>POST</td></tr><tr><td>Read</td><td>GET</td></tr><tr><td>Update</td><td>PUT, PATCH</td></tr><tr><td>Delete</td><td>DELETE</td></tr></tbody></table>

## Javascript

#### Etape 1 : On fetch la liste des nom de pokémon

- La sortie ressemble à ça :

```javascript
[
  {
    name: "bulbizar",
    url: "https://pokeapi.co/api/v2/pokemon/1"
  },
  ...
]
```

#### Etape 2 : on fetch les url de chaques pokémon quon récupére dans getListPokemon()

- La sortie ressemble à ça :

```javascript
  [
    {
    abilities: [ ... ],
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
```

#### Etape 3 : on affihce les pokémons fetché dans le container en itérant dans le tableau

- On créer un model html qui sera la structure de la carte pokémon
  > Le model fonctionne exacetement comme le `<Composant/>` en React

```javascript
const model = `
    <img src="..." />
    <span class="number">N°...</span>
    <h3>...</h3>

    <div class="types">
    <span class="type" style="background-color: ..." />
    <span class="type" style="background-color: ..." />
    </div>
`;
```

- Ce model sera injecter dans une `createElement("div")` qui lui même sera injecter dans le container

## HTML / CSS

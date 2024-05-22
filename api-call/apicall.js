// fetch("https://pokeapi.co/api/v2/pokemon/10")
//   .then(response => {
//     if(!response.ok) {
//         throw new Error("Pokemon not found");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.name))
//   .catch(error => console.error(error));


fetchPokemon();

async function fetchPokemon(){
    try {

        //client-side
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        //
        
        const response = await fetch(`/pokemon/${pokemonName}`);

        console.log(response);
        // if(!response.ok){
        //     throw new Error("Could not find pokemon");
        // }

        // const data = await response.json();

        // const pokemonSprite = data.sprites.front_default;
        // const imgElement = document.getElementById("pokemonSprite");

        // imgElement.src = pokemonSprite;
        // imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
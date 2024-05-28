// fetch("https://pokeapi.co/api/v2/pokemon/10")
//   .then(response => {
//     if(!response.ok) {
//         throw new Error("Pokemon not found");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.name))
//   .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('pokemonName');
    const button = document.getElementById('button');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            fetchPokemon();
        }
    });
});

async function fetchPokemon() {
    const errorMessage = document.getElementById('errorMessage');
    const imgElement = document.getElementById("pokemonSprite");
    const input = document.getElementById("pokemonName");
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not find pokemon");
        }

        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        errorMessage.style.display = "none";
        input.value = '';
    } catch (error) {
        errorMessage.style.display = "block";
        imgElement.style.display = "none";
        input.value = '';
    }
}

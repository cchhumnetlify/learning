export default async (req, context) => {

    const { pokemon } = context.params;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not find pokemon");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        // const imgElement = document.getElementById("pokemonSprite");

        // imgElement.src = pokemonSprite;
        // imgElement.style.display = "block";

    return pokemonSprite;
  };

  export const config = {
    path: "/pokemon/:pokemon"
  };

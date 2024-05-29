export default async (req, context) => {

    const { pokemon } = context.params;
    console.log("function call started");
    
    
    console.log("calling the url " + `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!response.ok){
            throw new Error("Could not find pokemon");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        // const imgElement = document.getElementById("pokemonSprite");

        // imgElement.src = pokemonSprite;
        // imgElement.style.display = "block";
    console.log("returning pokemon sprite for " + pokemonSprite);
    console.log("function call ended");
    return {
        body: JSON.stringify(pokemonSprite),
        statusCode: 200
      };
  };

  export const config = {
    path: "/pokemon/:pokemon"
  };



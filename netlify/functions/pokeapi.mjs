// export default async (req, context) => {
//     return new Response("Hello, world!");
//   };

fetch("https://pokeapi.co/api/v2/pokemon/7")
  .then(response => console.log(response))
  .catch(error => console.error(error))
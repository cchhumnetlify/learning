export default async (req, context) => {
  
    let params = new URLSearchParams(document.location.search);
    let pokemon = params.get("pokemon");


    return new Response(`You chose ${pokemon}!`);
  };

  export const config = {
    path: "/pokemon"
  };

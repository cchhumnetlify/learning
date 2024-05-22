export default async (req, context) => {

    const { pokemon } = context.params;

    return new Response(`You chose ${pokemon}!`);
  };

  export const config = {
    path: "/pokemon/:pokemon"
  };

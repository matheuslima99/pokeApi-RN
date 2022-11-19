import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { api } from "../../services/api";

interface PokemonType {
  type: string;
}

interface Pokemon {
  id: number;
  url: string;
  name: string;
  types: PokemonType[];
}

interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getAllPokemon() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            id,
            name: pokemon.name,
            types,
          };
        })
      );

      setPokemons(payloadPokemons);
    }

    getAllPokemon();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return { id, types };
  }

  return (
    <View>
      {pokemons.map((pokemon) => (
        <Text>{pokemon.name}</Text>
      ))}
    </View>
  );
}

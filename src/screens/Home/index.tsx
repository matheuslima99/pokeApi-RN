import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";

interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
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
    <HomeContainer>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => <PokemonCard data={pokemon} />}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
}

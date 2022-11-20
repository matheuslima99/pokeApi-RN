import { TouchableOpacityProps } from "react-native";
import {
  CardContainer,
  CardContainerInfo,
  ImageCardDetailLeftSide,
  PokemonContentType,
  PokemonId,
  PokemonName,
  PokemonType,
  PokemonTypeText,
} from "./styles";

import dotsImage from "../../assets/dots.png";

import { Pokemon } from "../../screens/Home";

interface PokemonCardProps extends TouchableOpacityProps {
  data: Pokemon;
}

export function PokemonCard({ data, ...rest }: PokemonCardProps) {
  return (
    <CardContainer type={data.types[0].type.name} {...rest}>
      <CardContainerInfo>
        <PokemonId>#{data.id}</PokemonId>
        <PokemonName>{data.name}</PokemonName>
        <ImageCardDetailLeftSide source={dotsImage} />

        <PokemonContentType>
          {data.types.map((pokemonType) => (
            <PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
            </PokemonType>
          ))}
        </PokemonContentType>
      </CardContainerInfo>
    </CardContainer>
  );
}

import styled, { css } from "styled-components/native";

interface PokemonType {
  // type:
  //   | " grass"
  //   | " fire"
  //   | "water"
  //   | "poison"
  //   | "normal"
  //   | "bug"
  //   | " flying"
  //   | "eletric"
  //   | " ground";
  type: string;
}

export const CardContainer = styled.TouchableOpacity<PokemonType>`
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;

  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const CardContainerInfo = styled.View`
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light_text};
`;

export const PokemonName = styled.Text`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  margin-top: 5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background};
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PokemonType = styled.View<PokemonType>`
  width: 65px;
  height: 25px;
  padding: 5px;
  border-radius: 3px;
  margin-right: 5px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background};
`;

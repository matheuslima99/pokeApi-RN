import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.boxType.water};

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.background};
`;

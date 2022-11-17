import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundCard.water};

  align-items: center;
  justify-content: center;
`;

export const WrapperAnimation = styled.View`
  width: 240px;
  height: 240px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.boxType.water};
  transform: rotate(-30deg);

  justify-content: flex-start;
  align-items: center;
`;

export const WrapperImage = styled.View`
  transform: rotate(30deg);
`;

export const WelcomeTitle = styled.Text`
  font-size: 48px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.background};
`;

export const WelcomeSubtitle = styled.Text`
  margin-bottom: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background};
`;

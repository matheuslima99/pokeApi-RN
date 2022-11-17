import {
  WelcomeContainer,
  WelcomeSubtitle,
  WelcomeTitle,
  WrapperAnimation,
  WrapperImage,
} from "./styles";
import LottieView from "lottie-react-native";

import pokemonAnimation from "./assets/squirtle.json";
import { Button } from "../../components/Button";

export function Welcome() {
  return (
    <WelcomeContainer>
      <WrapperAnimation>
        <WrapperImage>
          <LottieView
            style={{ width: 200 }}
            autoPlay
            source={pokemonAnimation}
            loop
          />
        </WrapperImage>
      </WrapperAnimation>

      <WelcomeTitle>Pokédex</WelcomeTitle>
      <WelcomeSubtitle>
        Encontre todos os pokémons em um só lugar
      </WelcomeSubtitle>

      <Button text="Entrar" />
    </WelcomeContainer>
  );
}

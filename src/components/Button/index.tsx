import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, TextButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      <TextButton>{text}</TextButton>
    </ButtonContainer>
  );
}

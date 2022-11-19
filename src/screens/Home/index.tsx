import { View } from "react-native";
import { useRequest } from "../../Hooks/useRequest";

export function Home() {
  const { data } = useRequest("pokemon/");
  console.log(data);

  return <View />;
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/global/styles/themes/default";
import { Home } from "./src/screens/Home";
import { Welcome } from "./src/screens/Welcome";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Welcome /> */}
      <Home />
    </ThemeProvider>
  );
}

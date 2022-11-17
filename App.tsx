import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/global/styles/themes/default";


export default function App() {
  return <ThemeProvider theme={defaultTheme}>
    
  </ThemeProvider>;
}

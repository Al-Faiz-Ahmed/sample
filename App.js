import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReactRouter from "./src/Config/reactRouter";
import ContextProvider from "./src/Context/context";
import {theme} from './src/materialTheme/materialpaper'
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <ContextProvider>
      <PaperProvider theme={theme}>
        <ReactRouter />
      </PaperProvider>
    </ContextProvider>
  );
}

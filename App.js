import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Routing/Stack";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    Bold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    Medium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    SemiBold: require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

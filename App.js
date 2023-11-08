import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Routing/Stack";
import { useFonts } from "expo-font";
import AuthStack from "./Routing/AuthStack";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/Store";

const AppContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registration?.user?.tokens);

  console.log(user, "user");
  return (
    <NavigationContainer>
      {user ? <MyStack /> : null}
      {!user ? <AuthStack /> : null}
    </NavigationContainer>
  );
};

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
    <Provider store={store}>
      <AppContent />
    </Provider>
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

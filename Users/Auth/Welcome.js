import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    const delay = 10 * 200;
    const timeout = setTimeout(() => {
      navigation.navigate("Auth");
    }, delay);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#515FDF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          onPress={() => navigation.navigate("Auth")}
          style={{
            fontFamily: "Bold",
            color: "#ffffff",
            fontSize: 24,
          }}
        >
          Padi-Ride
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function OnboardingTwo() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View
      style={[
        styles.containerfirst,
        {
         
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View style={styles.container}>
        {/* <Image source={logoImage} style={styles.logo} /> */}
        <Text style={styles.text}>Padiman Route....</Text>
        <Text style={[styles.textsmall]}>Travel and Parcel Smart</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Auth")}
          style={styles.buttonClick}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerfirst: {
    height: "100%",
    padding: 16,
    backgroundColor: "#515FDF",
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 94,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Bold",
    marginTop: "5%",

  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textsmall: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginTop: "0.5%",
    fontFamily: "Regular",
  },
  containerButton: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
  },
  buttonClick: {
    backgroundColor: "#18CC3F",
    width: "100%",
    height: 55,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 34
  },
  buttonClicks: {
    backgroundColor: "#fff",
    width: "100%",
    height: 55,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Bold",
    fontSize: 16,
  },
});

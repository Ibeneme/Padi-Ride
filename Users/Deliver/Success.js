import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const logoImage = require("../../assets/Images/Verify.png");

export default function DeliverySuccess() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTitleStyle: {
        fontFamily: "Regular",
      },
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <View
      style={[
        styles.containerfirst,
        {
          backgroundColor: "#ffff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.text}>Successful</Text>
        <Text style={[styles.textsmall]}>Take a Ride my way</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Deliver")}
          style={styles.buttonClick}
        >
          <Text style={styles.buttonText}>Proceed to Home</Text>
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
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 94,
  },
  text: {
    color: "#000",
    fontSize: 24,
    fontFamily: "Bold",
    marginTop: "5%",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textsmall: {
    color: "#000",
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
    backgroundColor: "#515FDF",
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

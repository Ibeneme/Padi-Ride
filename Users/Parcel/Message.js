import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Modal,
  Image,
  Keyboard,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TravellersMessage = () => {
  const navigation = useNavigation();
  const headerStyle = {
    backgroundColor: "white",
  };

  const headerTitleStyle = {
    color: "#000",
    borderBottomWidth: 0,
  };

  const headerTintColor = "#000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Ibeneme Ikenna",
      headerStyle,
      headerTitleStyle: {
        ...headerTitleStyle,
        fontFamily: "Bold",
      },
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f4f4f4",
        flex: 1,
        flexGrow: 1,
        paddingBottom: 24,
        height: "100%",
        marginBottom: -96,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#515FDF",
          padding: 16,
          marginBottom: 24,
          position: "fixed",
          top: 10,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}
        onPress={()=>navigation.navigate('payment')}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          Pay Now For this Service $ 45.54
        </Text>
        <FontAwesome5 name="arrow-right" size={18} color="#fff" />
      </TouchableOpacity>

      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
          padding: 12,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 12,
            flexDirection: "column",
            gap: 12,
            marginBottom: 12,
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                style={{
                  width: 48,
                  height: 48,
                }}
                source={{
                  uri: "https://res.cloudinary.com/dqa2jr535/image/upload/v1696037944/profile_nnh2lc.png",
                }}
              />
              <View>
                <Text style={styles.displayName}>Ibeneme Ikenna</Text>
                <Text style={styles.displayTag}>Port Harcourt</Text>
              </View>
            </View>
            <View></View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#515FDF25",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Regular",
                color: "#515FDF",
                lineHeight: 20,
              }}
            >
              Hello, hi your parcel looks fragile why did you choose not fragile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 12,
            flexDirection: "column",
            gap: 12,
            marginBottom: 12,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 12,
              flexDirection: "column",
              gap: 12,
              marginBottom: 12,
              alignItems: "left",
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Image
                  style={{
                    width: 48,
                    height: 48,
                  }}
                  source={{
                    uri: "https://res.cloudinary.com/dqa2jr535/image/upload/v1696037944/profile_nnh2lc.png",
                  }}
                />
                <View>
                  <Text style={styles.displayName}>Ibeneme Ikenna</Text>
                  <Text style={styles.displayTag}>Port Harcourt</Text>
                </View>
              </View>
              <View></View>
            </View>
            <TouchableOpacity
              style={{
                borderColor: "#00000045",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 14,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "Regular",
                  color: "#000",
                  lineHeight: 20,
                }}
              >
                Hello, hi your parcel looks fragile why did you choose not
                fragile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravellersMessage;
const styles = StyleSheet.create({
  displayName: {
    fontSize: 16,
    fontFamily: "Bold",
    color: "black",
  },
  displayTag: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "gray",
  },
});

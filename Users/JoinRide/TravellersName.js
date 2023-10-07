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
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TravellersDetails = () => {
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
      title: "",
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
            <View>
              <Text
                style={{
                  fontFamily: "Bold",
                  color: "#000",
                }}
              >
                $300
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#515FDF25",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
              width: 160,
              borderRadius: 333,
            }}
            onPress={()=>navigation.navigate('message')}
          >
            <Text
              style={{
                fontFamily: "Bold",
                color: "#515FDF",
              }}
            >
              Send a Message
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 12,
            flexDirection: "column",
            gap: 12,
            marginBottom: 12,
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
            <View>
              <Text
                style={{
                  fontFamily: "Bold",
                  color: "#000",
                }}
              >
                $940
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#515FDF25",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
              width: 160,
              borderRadius: 333,
            }}
            onPress={()=>navigation.navigate('message')}
          >
            <Text
              style={{
                fontFamily: "Bold",
                color: "#515FDF",
              }}
            >
              Send a Message
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 12,
            flexDirection: "column",
            gap: 12,
            marginBottom: 12,
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
            <View>
              <Text
                style={{
                  fontFamily: "Bold",
                  color: "#000",
                }}
              >
                $390
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#515FDF25",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
              width: 160,
              borderRadius: 333,
            }}
            onPress={()=>navigation.navigate('message')}
          >
            <Text
              style={{
                fontFamily: "Bold",
                color: "#515FDF",
              }}
            >
              Send a Message
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravellersDetails;
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

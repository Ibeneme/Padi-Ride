import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; // Import FontAwesome5 correctly
import { useNavigation } from "@react-navigation/native";

const Posts = ({onEllipsisPress}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 12,
        padding: 12,
        backgroundColor: "white",
        borderRadius: 6,
        marginTop: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
            <Text style={styles.displayTag}>@ibeneme_ikenna</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            gap: 4,
          }}
        >
          <Text style={styles.postTime}>10:00am</Text>
          <FontAwesome5 name="ellipsis-h" onPress={onEllipsisPress} size={14} />
        </View>
      </View>
      <Image
        style={{
          width: "100%",
          height: 200,
          borderRadius: 6,
        }}
        source={{
          uri: "https://res.cloudinary.com/dqa2jr535/image/upload/v1696030288/redcharlie-redcharlie1-vGbC6mOeUCw-unsplash_1_j4vajm.png",
        }}
      />
      <Text style={[styles.displayTag, { marginBottom: 18 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </View>
  );
};

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
  postTime: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "gray",
  },
});

export default Posts;

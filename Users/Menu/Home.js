import { View, Text, Image, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; // Import FontAwesome5 correctly
import { useNavigation } from "@react-navigation/native";
import Posts from "../Components/Post";

const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleEllipsisPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f4f4f4",
        flex: 1,
        flexGrow: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 24,
        height: "100%",
        marginBottom: -96,
      }}
    >




      <ScrollView
        style={
          {
            // position: "relative",
          }
        }
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 12,
            gap: 4,
            marginTop: 6,
            height: 65,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold" }}>
              👋 {""}Hello, Ibeneme
            </Text>
          </View>

          <TouchableOpacity
            //onPress={() => navigation.navigate("Notifications")}
            style={{ position: "relative", width: 28, height: 28 }}
          >
            <FontAwesome5
              name="bell"
              size={25}
              style={{ position: "absolute", left: 0 }}
            />
            <View
              style={{
                backgroundColor: "red",
                width: 20,
                height: 20,
                borderRadius: 20,
                top: -6,
                left: -4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 13,
                  color: "#ffffff",
                }}
              >
                {/* Add a number here to indicate the notification count */}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

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
              <FontAwesome5
                name="ellipsis-h"
                onPress={handleEllipsisPress}
                size={14}
              />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
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
              <FontAwesome5
                name="ellipsis-h"
                onPress={handleEllipsisPress}
                size={14}
              />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          position: "fixed",
          bottom: 64,
          left: "87%",
          backgroundColor: "#515FDF",
          width: 48,
          height: 48,
          borderRadius: 220,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="plus"
          onPress={()=>navigation.navigate('createPost')}
          size={24}
          color="white"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerView}>
            <Text
              style={[styles.ellipsis, { textAlign: "right" }]}
              onPress={closeModal}
            >
              Close
            </Text>
            <View style={styles.views}>
              <FontAwesome5
                name="share"
                onPress={handleEllipsisPress}
                size={18}
                color="white"
                width={16}
              />
              <Text style={styles.ellipsis}>Share Post</Text>
            </View>
            <View style={styles.views}>
              <FontAwesome5
                name="bookmark"
                onPress={handleEllipsisPress}
                size={18}
                color="white"
                width={16}
              />
              <Text style={styles.ellipsis}>Bookmark Post</Text>
            </View>
            <View style={styles.views}>
              <FontAwesome5
                name="ban"
                onPress={handleEllipsisPress}
                size={18}
                color="white"
                width={16}
              />
              <Text style={styles.ellipsis}>Report</Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#00000050",
    flex: 1,
    flexGrow: 1,
    bottom: 0,
    position: "relative",
  },
  modalContainerView: {
    paddingTop: 32,
    paddingBottom: 96,
    bottom: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: "#515FDF",
    borderRadius: 21,
    padding: 16,
    gap: 24,
    // alignItems: "center",
    //justifyContent: "center",
  },
  views: {
    color: "white",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  ellipsis: {
    color: "white",
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "left",
  },
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

export default Home;

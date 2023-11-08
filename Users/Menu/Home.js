import { View, Text, Image, StyleSheet, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; // Import FontAwesome5 correctly
import { useNavigation } from "@react-navigation/native";
import { deletePost, fetchAllPosts } from "../../Redux/Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../Redux/Users/User";

const Home = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const toggleItemExpansion = (postId) => {
    if (expandedItems.includes(postId)) {
      setExpandedItems(expandedItems.filter((id) => id !== postId));
    } else {
      setExpandedItems([...expandedItems, postId]);
    }
  };

  function formatTimestamp(timestamp) {
    const currentDate = new Date();
    const postDate = new Date(timestamp);

    const timeDifference = currentDate - postDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hrs ago`;
    } else if (minutes > 0) {
      return `${minutes} mins ago`;
    } else {
      return `${seconds} secs ago`;
    }
  }

  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const isLoadingPosts = useSelector((state) => state.post.isLoadingPosts);
  const [userProfiles, setUserProfile] = useState("");
  const [postData, setPosts] = useState([]);
  const { isLoading, userProfile } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchAllPosts())
        .then((response) => {
          console.log(response?.payload?.data?.post_details, "posts");
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch(fetchUserProfile())
        .then((response) => {
          console.log("dispatched");
          setUserProfile(response?.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllPosts())
      .then((response) => {
        console.log(response?.payload?.data?.post_details, "posts");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllPosts())
      .then((response) => {
        console.log(response?.payload, "posts");
        setPosts(response?.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  console.log(posts, "postsposts");
  const fetchingAllPost = () => {
    dispatch(fetchAllPosts())
      .then((response) => {
        console.log(response?.payload?.data, "postsrr");
        navigation.navigate("drawer");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
      .then((response) => {
        fetchingAllPost();
        console.log("Delete Post Response:", response);
      })
      .catch((error) => {
        console.error("Delete Post Error:", error);
      });
  };

  const handleEllipsisPress = (postId) => {
    setModalVisible(true);
    console.log("Post ID:", postId);
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
              👋 {""}Hello, {userProfile.first_name}
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

        <View>
          <FlatList
            data={posts?.data?.slice()?.reverse()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
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
                      <Text style={styles.displayName}>{item?.name}</Text>
                      <Text style={styles.displayTag}>@{item?.name}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 8,
                      gap: 4,
                    }}
                  >
                    <Text style={styles.postTime}>
                      {formatTimestamp(item?.post_details?.timestamp)}
                    </Text>
                    <FontAwesome5
                      name="ellipsis-h"
                      onPress={() => handleEllipsisPress(item.post_details.id)}
                      size={14}
                    />
                  </View>
                </View>
                {/* <Image
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 6,
                }}
                source={{
                  uri: "https://res.cloudinary.com/dqa2jr535/image/upload/v1696030288/redcharlie-redcharlie1-vGbC6mOeUCw-unsplash_1_j4vajm.png",
                }}
              /> */}
                <View>
                  <Text style={[styles.displayTag, { marginBottom: 18 }]}>
                    {expandedItems.includes(item.post_details.id)
                      ? item?.post_details?.post
                      : item?.post_details?.post?.slice(0, 300)}
                    {item?.post_details?.post?.length > 300 && (
                      <Text
                        style={{ color: "blue" }}
                        onPress={() =>
                          toggleItemExpansion(item.post_details.id)
                        }
                      >
                        {expandedItems.includes(item.post_details.id)
                          ? "       See Less"
                          : "       See More"}
                      </Text>
                    )}
                  </Text>
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
                      <TouchableOpacity
                        style={styles.views}
                        //onPress={() => handleDeletePost(item.post_details.id)}
                      >
                        <FontAwesome5
                          name="ban"
                          size={18}
                          color="white"
                          width={16}
                        />
                        <Text style={styles.ellipsis}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            )}
          />
        </View>

        {/* <View
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
          <Text style={[styles.displayTag, { marginBottom: 18 }]}></Text>
        </View> */}
        {/* <View
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
        </View> */}
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
          onPress={() => navigation.navigate("createPost")}
          size={24}
          color="white"
        />
      </View>
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

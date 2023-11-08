import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { createPost, fetchAllPosts } from "../../Redux/Posts/Post";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [res, setRes] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setLoading] = useState(false);


  const handleTextChange = (text) => {
    setInputValue(text);
    setCharCount(text.length);
    console.log(text);
  };



  const { loading, userProfile } = useSelector((state) => state.post);

  useEffect(() => {
    if (loading === true) {
      dispatch(fetchAllPosts())
        .then((response) => {
          console.log(response?.payload?.data?.post_details, "postslt");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);

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

  const handleCreatePost = () => {
    setLoading(true);

    console.log(inputValue, "valu");
    const post = inputValue;

    dispatch(createPost({ post }))
      .then((response) => {
        setLoading(false);
        console.log(response.payload, "setRes");
        setRes(response?.payload?.status);
        if (response?.payload?.status === "Post created.") {
          fetchingAllPost();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };




  //console.log(submitForm, 'travelTo')
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          margin: 16,
          padding: 16,
          height: 60,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontFamily: "Medium", fontSize: 16 }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#515FDF",
            height: 48,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
          onPress={handleCreatePost}
        >
          <Text
            style={{ fontFamily: "SemiBold", fontSize: 16, color: "white" }}
          >
            {isLoading ? <ActivityIndicator /> : "Upload"}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white",
          margin: 16,
          padding: 16,
          flex: 1,
          borderRadius: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Image
            style={{ width: 48, height: 48 }}
            source={{
              uri: "https://res.cloudinary.com/dqa2jr535/image/upload/v1696037944/profile_nnh2lc.png",
            }}
          />
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Bold", color: "black" }}>
              Ibeneme Ikenna
            </Text>
            <Text
              style={{ fontSize: 14, fontFamily: "Regular", color: "gray" }}
            >
              @ibeneme_ikenna
            </Text>
          </View>
        </View>

        <View>
          <TextInput
            style={{
              marginTop: 12,
              fontFamily: "Regular",
              fontSize: 16,
              borderColor: charCount > 1000 ? "red" : "white",
              borderWidth: 1,
              borderRadius: 6,
              minHeight: 150,
              maxHeight: 200,
              padding: 8,
            }}
            placeholder="Type something..."
            value={inputValue}
            onChangeText={handleTextChange}
            multiline={true}
          />
          <Text
            style={{
              color: charCount > 1000 ? "red" : "gray",
              fontFamily: "Medium",
            }}
          >
            {charCount > 1000
              ? `You can't exceed 1000 characters`
              : `${charCount}/1000 `}
          </Text>
        </View>
        {/* <TouchableOpacity onPress={selectImage}>
          <View
            style={{
              marginTop: 12,
              height: 150,
              backgroundColor: "#515FDF17",
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: "100%", height: "100%", borderRadius: 6 }}
              />
            ) : (
              <Text
                style={{ fontSize: 16, fontFamily: "Regular", color: "#515FDF" }}
              >
                Add Image
              </Text>
            )}
          </View>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;

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

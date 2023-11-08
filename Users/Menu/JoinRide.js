import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ViewBase,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import HistoryLogs from "../Components/HistoryLog";
import { useNavigation } from "@react-navigation/native";
const imageBackground = require("../../assets/Images/Dashboard.png");

const Deliver = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("flipper"); // "flipper" is active by default

  const toggleFlipper = () => {
    setActiveTab("flipper");
  };

  const toggleRipper = () => {
    setActiveTab("ripper");
  };

  // const toggleFlipper = () => {
  //   setFlipperActive(!flipperActive);
  //   setRipperActive(false);
  // };

  // const toggleRipper = () => {
  //   setRipperActive(!ripperActive);
  //   setFlipperActive(false);
  // };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f4f4f4",
        flex: 1,
        flexGrow: 1,
        padding: 16,
        paddingBottom: 24,
        height: "100%",
        marginBottom: -96,
        width: "100%",
      }}
    >
      <ScrollView
        style={{
          padding: 16,
          width: "100%",
        }}
      >
        <View style={styles.container}>
          <Image
            style={{
              width: "100%",
              height: 260,
              borderRadius: 12,
            }}
            source={imageBackground}
          />
          <View style={styles.overlay}>
            <Text style={styles.name}> 👋 {""}Hello, Ibeneme Ikenna</Text>
            <View
              style={{
                flexDirection: "column",
                marginBottom: 12,
                gap: 8,
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: "#FFFFFF25",
                    borderRadius: 2222,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 24,
                    paddingRight: 24,
                    flexDirection: "row",
                    gap: 12,
                  },
                ]}
                onPress={() => navigation.navigate("passengers")}
              >
                <FontAwesome5 name="users" size={18} color="white" />
                <Text style={styles.buttonText}>Carry a Passenger</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#FFFFFF25",
                  borderRadius: 2222,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 24,
                  paddingRight: 24,
                  flexDirection: "row",
                  gap: 12,
                }}
                onPress={() => navigation.navigate("CreateRide")}
            
              >
                <FontAwesome5 name="car" size={18} color="white" />

                <Text style={styles.buttonText}>Join a Ride</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "white",
            marginTop: 12,
            alignItems: "center",
            padding: 12,
            borderRadius: 2444,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor:
                activeTab === "flipper" ? "#515FDF" : "transparent",
              borderRadius: 24,
              width: 140,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={toggleFlipper}
          >
            <Text
              style={{
                color: activeTab === "flipper" ? "white" : "black",
                fontFamily: activeTab === "flipper" ? "Bold" : "Regular",
                fontSize: 16,
              }}
            >
              Passengers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor:
                activeTab === "ripper" ? "#515FDF" : "transparent",
              borderRadius: 24,
              width: 130,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={toggleRipper}
          >
            <Text
              style={{
                color: activeTab === "ripper" ? "white" : "black",
                fontFamily: activeTab === "ripper" ? "Bold" : "Regular",
                fontSize: 16,
              }}
            >
              Rides            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === "flipper" && (
          <View
            style={{
              marginBottom: 180,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 4,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffffff",
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  paddingBottom: 24,
                  justifyContent: "space-between",
                  width: "49%",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#515FDF12",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 3333,
                  }}
                >
                  <FontAwesome5 name="users" size={18} color="#515FDF" />
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Bold",
                  }}
                >
                  3
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Regular",
                    }}
                  >
                    Pending Passengers
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  paddingBottom: 24,
                  justifyContent: "space-between",
                  width: "49%",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#515FDF12",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 3333,
                  }}
                >
                  <FontAwesome5 name="users" size={18} color="#515FDF" />
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Bold",
                  }}
                >
                  3
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Regular",
                    }}
                  >
                    Pending Passengers
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  //backgroundColor: "white",
                  borderRadius: 12,
                  //padding: 16,
                  gap: 2,
                  marginTop: 48,
                  marginBottom: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "SemiBold",
                  }}
                >
                  Passengers History
                </Text>
                {/* <FontAwesome5
                  name="arrow-alt-circle-down"
                  size={24}
                  color="#515FDF"
                /> */}

                {/* <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Regular",
                    color: "gray",
                  }}
                >
                  View your Delivery History
                </Text> */}
              </View>
              <View
                style={{
                  gap: 8,
                }}
              >
                <HistoryLogs
                  receiversName="Ibeneme Ikenna"
                  location="Port Harcourt"
                  price="$200.00"
                  icon="users"
                />
                <HistoryLogs
                  receiversName="Jane Smith"
                  location="456 Elm St, Town"
                  price="$75.00"
                  icon="users"
                />
                <HistoryLogs
                  receiversName="John Doe"
                  location="123 Main St, City"
                  price="$100.00"
                  icon="users"
                />
              </View>
            </View>
          </View>
        )}

        {activeTab === "ripper" && (
          <View
            style={{
              marginBottom: 180,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 4,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffffff",
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  paddingBottom: 24,
                  justifyContent: "space-between",
                  width: "49%",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#515FDF12",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 3333,
                  }}
                >
                  <FontAwesome5 name="car" size={18} color="#515FDF" />
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Bold",
                  }}
                >
                  3
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Regular",
                    }}
                  >
                    Pending Rides
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  paddingBottom: 24,
                  justifyContent: "space-between",
                  width: "49%",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#515FDF12",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 3333,
                  }}
                >
                  <FontAwesome5 name="car" size={18} color="#515FDF" />
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Bold",
                  }}
                >
                  3
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Regular",
                    }}
                  >
                    Pending Rides
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  //backgroundColor: "white",
                  borderRadius: 12,
                  //padding: 16,
                  gap: 2,
                  marginTop: 48,
                  marginBottom: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "SemiBold",
                  }}
                >
                  RidesHistory
                </Text>
                {/* <FontAwesome5
                  name="arrow-alt-circle-down"
                  size={24}
                  color="#515FDF"
                /> */}

                {/* <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Regular",
                    color: "gray",
                  }}
                >
                  View your RidesHistory
                </Text> */}
              </View>
              <View
                style={{
                  gap: 8,
                }}
              >
                <HistoryLogs
                  receiversName="Ibeneme Ikenna"
                  location="Port Harcourt"
                  price="$200.00"
                  icon="car"
                />
                <HistoryLogs
                  receiversName="Jane Smith"
                  location="456 Elm St, Town"
                  price="$75.00"
                  icon="car"
                />
                <HistoryLogs
                  receiversName="John Doe"
                  location="123 Main St, City"
                  price="$100.00"
                  icon="car"
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Deliver;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    gap: 12,
  },
  name: {
    marginTop: 24,
    color: "white",
    fontSize: 18,
    fontFamily: "Medium",
  },
  button: {},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Medium",
  },
});

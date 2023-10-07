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
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";

const CreateDelivery = () => {
  const navigation = useNavigation()
  const [isModalVisible, setModalVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [travelTo, setTravelTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [busStop, setBusStop] = useState("");
  const [travelFrom, setTravelFrom] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleEllipsisPress = () => {
    setModalVisible(true);
  };
const handleEllipsisPressClose = ()=>{
  setModalVisible(false);
  navigation.navigate('DeliverySummary')
}
  const closeModal = () => {
    setModalVisible(false); 
  };


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
      title: "Deliver Someone's  Parcel",
      headerStyle,
      headerTitleStyle: {
        ...headerTitleStyle,
        fontFamily: "Bold",
      },
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const handleTravelToChange = (text) => {
    setTravelTo(text);
    if (text === "Overseas") {
      Alert.alert("Coming Soon");
    }
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
        style={{
          backgroundColor: "white",
          flex: 1,
          flexGrow: 1,
          padding: 12,
          margin: 12,
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "#515FDF12",
              justifyContent: "center",
              alignItems: "center",
              width: 48,
              height: 48,
              borderRadius: 3333,
              marginTop: 24,
            }}
          >
            <FontAwesome5 name="truck" size={18} color="#515FDF" />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "SemiBold",
              marginTop: 12,
            }}
          >
            Deliver Someone's Parcel
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Regular",
              color: "gray",
              marginTop: 2,
              marginBottom: 24,
            }}
          >
            Please fill out the form
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Where are you traveling to?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={travelTo}
            onChangeText={handleTravelToChange}
            placeholder="Within the country / Overseas"
          />
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Which state are you traveling to?
          </Text>
          <TextInput style={[styles.textInput]} placeholder="Select a state" />
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Which city are you traveling to?
          </Text>
          <TextInput style={[styles.textInput]} placeholder="Enter city" />
        </View>

        {/* Travel Date */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What date are you traveling?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={travelDate}
            onChangeText={(text) => setTravelDate(text)}
            placeholder="Enter travel date"
          />
        </View>

        {/* Arrival Date */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What date will you arrive?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={arrivalDate}
            onChangeText={(text) => setArrivalDate(text)}
            placeholder="Enter arrival date"
          />
        </View>

        {/* Arrival Time */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            At what time are you estimated to arrive?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={arrivalTime}
            onChangeText={(text) => setArrivalTime(text)}
            placeholder="Enter estimated arrival time"
          />
        </View>

        {/* Bus Stop */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Where is your preferred bus stop?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={busStop}
            onChangeText={(text) => setBusStop(text)}
            placeholder="Enter preferred bus stop"
          />
          <Text
            style={{
              color: "#515FDF",
              padding: 16,
              backgroundColor: "#515FDF25",
              fontFamily: "Regular",
              borderLeftWidth: 2,
              borderLeftColor: "#515FDF",
            }}
          >
            Safety precaution: only deliver a parcel in a public place
          </Text>
        </View>

        {/* Travel From */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Which city are you traveling from?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={travelFrom}
            onChangeText={(text) => setTravelFrom(text)}
            placeholder="Enter city"
          />
        </View>

        {/* Pickup Location */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What is your preferred pickup location?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={pickupLocation}
            onChangeText={(text) => setPickupLocation(text)}
            placeholder="Enter pickup location"
          />
        </View>

        {/* Pickup Time */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What is your preferred pickup time?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={pickupTime}
            onChangeText={(text) => setPickupTime(text)}
            placeholder="Enter pickup time"
          />
          <Text
            style={{
              color: "#515FDF",
              padding: 16,
              backgroundColor: "#515FDF25",
              fontFamily: "Regular",
              borderLeftWidth: 2,
              borderLeftColor: "#515FDF",
            }}
          >
            Ensure you check any item you're delivering before sealing.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              color: "#515FDF",
              padding: 16,
              backgroundColor: "#515FDF",
              fontFamily: "Regular",
              borderRadius: 6,
              marginTop: 48,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 200,
            }}
            onPress={handleEllipsisPress}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "SemiBold",
                color: "white",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerView}>
            <Text
              style={[
                styles.ellipsis,
                {
                  textAlign: "right",
                  fontSize: 16,
                  fontFamily: "Regular",
                  color: "white",
                },
              ]}
              onPress={closeModal}
            >
              Close
            </Text>
            <View style={styles.views}>
              <Text
                style={{
                  fontFamily: "Bold",
                  color: "#000",
                  fontSize: 18,
                }}
              >
                Which of these types of parcels can you deliver? Options are:
              </Text>
            </View>
            <View style={styles.container}>
              {/* <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View> */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 24,
                }}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  borderColor={isChecked ? "#ffffff" : "#000"}
                  color={isChecked ? "#515FDF" : undefined}
                />
                <Text
                  style={{
                    color: "#000",
                    fontFamily: "Regular",
                    fontSize: 16,
                  }}
                >
                  Light parcels I can easily carry.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 24,
                }}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  borderColor={isChecked ? "#ffffff" : "#000"}
                  color={isChecked ? "#515FDF" : undefined}
                />
                <Text
                  style={{
                    color: "#000",
                    fontFamily: "Regular",
                    fontSize: 16,
                  }}
                >
                  Heavy parcels that can fit into my car boot.
                </Text>
              </View>

              {/* <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View> */}
            </View>
            <TouchableOpacity
              style={{
                color: "#515FDF",
                padding: 16,
                backgroundColor: "#515FDF",
                fontFamily: "Regular",
                borderRadius: 6,
                marginTop: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleEllipsisPressClose}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "SemiBold",
                  color: "white",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CreateDelivery;
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
    backgroundColor: "#ffff",
    borderRadius: 21,
    padding: 16,
    gap: 24,
    // alignItems: "center",
    //justifyContent: "center",
  },
  textInput: {
    height: 50,
    fontFamily: "Regular",
    fontSize: 16,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  checkbox: {},
});

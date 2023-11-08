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
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverParcel,
  fetchDeliveries,
} from "../../Redux/Deliveries/Deliveries";

const DeliverySummary = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [travelTo, setTravelTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [busStop, setBusStop] = useState("");
  const [travelFrom, setTravelFrom] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [ERR, setERR] = useState("");

  const route = useRoute();
  const {
    CountryTravelledTo,
    StatesTravelledTo,
    CityTravelledTo,
    TimeOfTravel,
    DateTravelling,
    DateArrival,
    preferredBusStop,
    cityOfTravel,
    preferredPickupLocation,
    preferredPickupTime,
    lightParcelChecked,
    heavyParcelChecked,
    maxprice,
    minprice,
  } = route.params;

  console.log(
    CountryTravelledTo,
    StatesTravelledTo,
    CityTravelledTo,
    TimeOfTravel,
    DateTravelling,
    DateArrival,
    preferredBusStop,
    cityOfTravel,
    preferredPickupLocation,
    preferredPickupTime,
    lightParcelChecked,
    maxprice,
    minprice,
    heavyParcelChecked
  );

  const handleDeliverParcel = () => {
    const payload = {
      destination: StatesTravelledTo,
      //country: CountryTravelledTo,
      state: StatesTravelledTo,
      city: CityTravelledTo,
      travel_date: DateTravelling,
      arrival_date: DateArrival,
      bus_stop: preferredBusStop,
      min_price: minprice,
      max_price: maxprice,
      can_carry_light: true,
      can_carry_heavy: false,
    };

    console.log(payload, "payload");
    dispatch(deliverParcel(payload))
      .then((result) => {
        console.log("Parcel delivered successfully:", result?.type);
        if (result?.type === "delivery/deliverParcel/fulfilled") {
          navigation.navigate("DeliverySuccess");
        } else {
          setERR("Please go back and fill your details correctly");
        }
        //navigation.navigate("DeliverySuccess")
      })
      .catch((error) => {
        console.error("Error delivering parcel:", error);
      });
  };

  const handleEllipsisPress = () => {
    setModalVisible(true);
  };
  const handleEllipsisPressClose = () => {
    setModalVisible(false);
  };
  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

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
      title: "Delivery Summary",
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

  const dispatch = useDispatch();

  const handleFetchDeliveries = () => {
    dispatch(fetchDeliveries())
      .then((result) => {
        console.log("Deliveries fetched successfully:", result);
      })
      .catch((error) => {
        console.error("Error fetching deliveries:", error);
      });
  };

  const deliveries = useSelector((state) => state.delivery?.deliveries);
  console.log(deliveries, "deliveries");
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
              marginTop: 12,
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
            Delivery Summary
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Regular",
              color: "gray",
              marginTop: 2,
              marginBottom: 24,
            }}
          >
            Read Carefully before making request
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            Where are you traveling to?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {CountryTravelledTo}
          </Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            Which state are you traveling to?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {StatesTravelledTo}
          </Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            Which city are you traveling to?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {CityTravelledTo}
          </Text>
        </View>

        {/* Travel Date */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What date are you traveling?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {TimeOfTravel}
          </Text>
        </View>

        {/* Arrival Date */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What date will you arrive?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {DateTravelling}
          </Text>
        </View>

        {/* Arrival Time */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            At what time are you estimated to arrive?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {DateArrival}
          </Text>
        </View>

        {/* Bus Stop */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            Where is your preferred bus stop?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {preferredBusStop}
          </Text>
        </View>

        {/* Travel From */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            Which city are you traveling from?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {cityOfTravel}
          </Text>
        </View>

        {/* Pickup Location */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What is your preferred pickup location?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {preferredPickupLocation}
          </Text>
        </View>

        {/* Pickup Time */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What is your preferred pickup time?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {preferredPickupTime}
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What is your min price?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {minprice}
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              lineHeight: 21,
              marginTop: 12,
            }}
          >
            What is your max price?
          </Text>
          <Text style={{ fontSize: 18, fontFamily: "SemiBold" }}>
            {maxprice}
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
            onPress={handleDeliverParcel}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Medium",
                color: "white",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "red",
              fontFamily: "Medium",
            }}
          >
            {ERR ? ERR : null}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliverySummary;
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
    fontSize: 18,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  checkbox: {},
});

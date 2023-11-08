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
import { Checkbox } from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// import DateTimePicker from "@react-native-community/datetimepicker";

const CreateDelivery = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // For iOS, only show time picker
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
    setMode("date");
  };

  const showTimePicker = () => {
    setShow(true);
    setMode("time");
  };

  const [dateArrival, setDateArrival] = useState(new Date());
  const [modeArrival, setModeArrival] = useState("date");
  const [showArrival, setShowArrival] = useState(false);

  const onChangeArrival = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowArrival(Platform.OS === "ios"); // For iOS, only show time picker
    setDateArrival(currentDate);
  };

  const showDatePickerArrival = () => {
    setShowArrival(true);
    setModeArrival("date");
  };

  const showTimePickerArrival = () => {
    setShowArrival(true);
    setModeArrival("time");
  };

  const [lightParcelChecked, setLightParcelChecked] = useState(false);
  const [heavyParcelChecked, setHeavyParcelChecked] = useState(false);

  console.log(lightParcelChecked, heavyParcelChecked);

  const handleSubmit = () => {
    setIsFormValid("");
    const DateTravellings = date;
    const inputDate = new Date(DateTravellings);
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = inputDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);

    const DateTravellingss = dateArrival;
    const inputDates = new Date(DateTravellingss);
    const years = inputDates.getFullYear();
    const months = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const days = inputDates.getDate().toString().padStart(2, "0");
    const formattedDates = `${years}-${months}-${days}`;
    console.log(formattedDates);

    const CountryTravelledTo = travelToCountry?.label;
    const StatesTravelledTo = travelTo?.label;
    const CityTravelledTo = travelCity;
    const TimeOfTravel = DatetravelTo;
    const DateTravelling = formattedDate;
    const DateArrival = formattedDates;
    const preferredBusStop = busStop;
    const cityOfTravel = travelFrom;
    const preferredPickupLocation = pickupLocation;
    const preferredPickupTime = pickupTime;
    const lightParcelChecked = lightParcelChecked;
    const heavyParcelChecked = heavyParcelChecked;

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
      preferredPickupTime
    );

    setModalVisible(false);
    if (
      CountryTravelledTo &&
      // !== " "
      StatesTravelledTo &&
      // !== " "
      CityTravelledTo &&
      // !== " "
      TimeOfTravel &&
      // !== " "
      DateTravelling &&
      // !== " "
      DateArrival &&
      // !== " "
      preferredBusStop &&
      // !== " "
      cityOfTravel &&
      // !== " "
      preferredPickupLocation &&
      // !== " "
      preferredPickupTime
      // !== " "
    ) {
      navigation.navigate("DeliverySummary", {
        CountryTravelledTo: travelToCountry?.label,
        StatesTravelledTo: travelTo?.label,
        CityTravelledTo: travelCity,
        TimeOfTravel: DatetravelTo,
        DateTravelling: formattedDate,
        DateArrival: formattedDates,
        preferredBusStop: busStop,
        cityOfTravel: travelFrom,
        preferredPickupLocation: pickupLocation,
        preferredPickupTime: pickupTime,
        minprice: minprice,
        maxprice: maxprice,
        lightParcelChecked: lightParcelChecked,
        heavyParcelChecked: lightParcelChecked,
      });
    } else {
      setIsFormValid("Fill all forms");
    }
  };
  const [isFormValid, setIsFormValid] = useState("");

  const validateForm = () => {
    // Implement your validation logic here
    if (
      travelToCountry &&
      travelTo &&
      travelCity &&
      DatetravelTo &&
      travelDate &&
      arrivalTime &&
      busStop &&
      travelFrom &&
      pickupLocation &&
      pickupTime &&
      minprice &&
      maxprice
      // &&
      // (lightParcelChecked || heavyParcelChecked)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const [minprice, setMinprice] = useState("");
  const [maxprice, setMaxprice] = useState("");

  const handleLightParcelToggle = () => {
    setIsFormValid("");
    setLightParcelChecked(true);
    setHeavyParcelChecked(false);
  };

  const handleHeavyParcelToggle = () => {
    setIsFormValid("");
    setLightParcelChecked(false);
    setHeavyParcelChecked(true);
  };

  const navigation = useNavigation();
  //const [showDatePicker, setShowDatePicker] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const currentDate = new Date();
  const [travelTo, setTravelTo] = useState("");
  const [travelToCountry, setTravelToCountry] = useState("");
  const [DatetravelTo, setDateTravelTo] = useState("");
  const [travelCity, setTravelCity] = useState("");

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
  const handleEllipsisPressClose = () => {
    setModalVisible(false);
    navigation.navigate("DeliverySummary");
  };
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

  const nigeriaStates = [
    {
      label: "Abia",
      value: "Abia",
    },
    {
      label: "Adamawa",
      value: "Adamawa",
    },
    {
      label: "Akwa Ibom",
      value: "Akwa Ibom",
    },
    {
      label: "Anambra",
      value: "Anambra",
    },
    {
      label: "Bauchi",
      value: "Bauchi",
    },
    {
      label: "Bayelsa",
      value: "Bayelsa",
    },
    {
      label: "Benue",
      value: "Benue",
    },
    {
      label: "Borno",
      value: "Borno",
    },
    {
      label: "Cross River",
      value: "Cross River",
    },
    {
      label: "Delta",
      value: "Delta",
    },
    {
      label: "Ebonyi",
      value: "Ebonyi",
    },
    {
      label: "Edo",
      value: "Edo",
    },
    {
      label: "Ekiti",
      value: "Ekiti",
    },
    {
      label: "Enugu",
      value: "Enugu",
    },
    {
      label: "FCT - Abuja",
      value: "FCT - Abuja",
    },
    {
      label: "Gombe",
      value: "Gombe",
    },
    {
      label: "Imo",
      value: "Imo",
    },
    {
      label: "Jigawa",
      value: "Jigawa",
    },
    {
      label: "Kaduna",
      value: "Kaduna",
    },
    {
      label: "Kano",
      value: "Kano",
    },
    {
      label: "Katsina",
      value: "Katsina",
    },
    {
      label: "Kebbi",
      value: "Kebbi",
    },
    {
      label: "Kogi",
      value: "Kogi",
    },
    {
      label: "Kwara",
      value: "Kwara",
    },
    {
      label: "Lagos",
      value: "Lagos",
    },
    {
      label: "Nasarawa",
      value: "Nasarawa",
    },
    {
      label: "Niger",
      value: "Niger",
    },
    {
      label: "Ogun",
      value: "Ogun",
    },
    {
      label: "Ondo",
      value: "Ondo",
    },
    {
      label: "Osun",
      value: "Osun",
    },
    {
      label: "Oyo",
      value: "Oyo",
    },
    {
      label: "Plateau",
      value: "Plateau",
    },
    {
      label: "Rivers",
      value: "Rivers",
    },
    {
      label: "Sokoto",
      value: "Sokoto",
    },
    {
      label: "Taraba",
      value: "Taraba",
    },
    {
      label: "Yobe",
      value: "Yobe",
    },
    {
      label: "Zamfara",
      value: "Zamfara",
    },
  ];

  const Country = [
    {
      label: "Nigeria",
      value: "Nigeria",
    },
  ];

  const handleCountryStatesChange = (travelTo) => {
    setIsFormValid("");
    setTravelTo(travelTo);
    console.log(travelTo, "travel");
  };

  const handleCountryChange = (travelToCountry) => {
    setIsFormValid("");
    setTravelToCountry(travelToCountry);
    console.log(travelToCountry, "travelToCountry");
  };
  const handleDateTravel = (DatetravelTo) => {
    setIsFormValid("");
    setDateTravelTo(DatetravelTo);
    console.log(DatetravelTo, "DatetravelTo");
  };

  const handleCityTravel = (travelCity) => {
    setIsFormValid("");
    setTravelCity(travelCity);
    console.log(travelCity, "travtravelCityel");
  };

  const [dates, setDates] = useState(new Date());
  const [Errdates, ErrSetdates] = useState("");

  // const onChange = (event, selectedDate) => {
  //   ErrSetdates("");
  //   setShowDatePicker(Platform.OS === "ios");
  //   if (selectedDate) {
  //     setDates(selectedDate);
  //     console.log(selectedDate, dates, "ggg");
  //   } else if (selectedDate === " ") {
  //     ErrSetdates("Select a Pickup Dater");
  //   }
  // };
  //console.log(dates, dates, "datesdates");

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

          <Dropdown
            style={styles.textInput}
            itemTextStyle={{
              fontSize: 17,
              color: `#121212`,
              fontFamily: "Regular",
            }}
            itemContainerStyle={{
              backgroundColor: "#ffffff",
            }}
            data={Country}
            //search
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholderTextColor={"#1e1e1e45"}
            placeholder="Select Country"
            value={travelToCountry}
            onChange={handleCountryChange}
          />

          {/* <TextInput
            style={[styles.textInput]}
            value={travelTo}
            onChangeText={handleTravelToChange}
            placeholder="Within the country / Overseas"
          /> */}
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What State are you traveling to?
          </Text>

          <Dropdown
            style={styles.textInput}
            itemTextStyle={{
              fontSize: 17,
              color: `#121212`,
              fontFamily: "Regular",
            }}
            itemContainerStyle={{
              backgroundColor: "#ffffff",
            }}
            data={nigeriaStates}
            //search
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholderTextColor={"#1e1e1e45"}
            placeholder="Select Nigerian State"
            value={travelTo}
            onChange={handleCountryStatesChange}
          />

          {/* <TextInput
            style={[styles.textInput]}
            value={travelTo}
            onChangeText={handleTravelToChange}
            placeholder="Within the country / Overseas"
          /> */}
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            Which city are you traveling to?
          </Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={handleCityTravel}
            placeholder="Enter city"
            value={travelCity}
          />
        </View>

        {/* Travel Date */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What Time are you estimated to arrive? (in Hrs)
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={DatetravelTo}
            onChangeText={handleDateTravel}
            placeholder="Enter time in hrs date"
            keyboardType="numeric"
          />
        </View>

        {/* Arrival Date */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What date will you travel?
          </Text>

          <View
            style={[
              styles.textInput,
              {
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <View>
              <Text
                style={[
                  {
                    fontFamily: "Medium",
                    color: `#000`,
                    fontSize: 16,
                  },
                ]}
              >{`${
                date ? date.toISOString().split("T")[0] : "Choose Pickup date"
              }`}</Text>
            </View>
            <View>
              <Button onPress={showDatePicker} title="Choose Date" />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  //mode="datetime"
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  minimumDate={currentDate}
                  timeZoneOffsetInMinutes={-60}
                />
              )}
            </View>
          </View>

          {/* <TextInput
            style={[styles.textInput]}
            value={travelDate}
            onChangeText={(text) => setTravelDate(text)}
            placeholder="Enter estimated arrival time"
          /> */}
          <View
            style={[
              styles.input,
              {
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            {/* <View>
              <Text
                style={[
                  {
                    fontFamily: "Medium",
                    //color: `${theme.text}65`,
                    fontSize: 16,
                  },
                ]}
              >{`${dates ? dates : "Choose date"}`}</Text>
            </View> */}
            {/* <View>
              <Button
                onPress={() => setShowDatePicker(true)}
                title="Choose Date"
              />
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dates}
                  //mode="datetime"
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  minimumDate={currentDate}
                  timeZoneOffsetInMinutes={-60}
                />
              )}
            </View> */}
          </View>
        </View>

        {/* Arrival Time */}
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What date will you arrive?
          </Text>

          <View
            style={[
              styles.textInput,
              {
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <View>
              <Text
                style={[
                  {
                    fontFamily: "Medium",
                    color: `#000`,
                    fontSize: 16,
                  },
                ]}
              >{`${
                dateArrival
                  ? dateArrival.toISOString().split("T")[0]
                  : "Choose Pickup date"
              }`}</Text>
            </View>
            <View>
              <Button onPress={showDatePickerArrival} title="Choose Date" />
              {showArrival && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateArrival}
                  //mode="datetime"
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeArrival}
                  minimumDate={currentDate}
                  timeZoneOffsetInMinutes={-60}
                />
              )}
            </View>
          </View>
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

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What is your Min Price or Charge?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={minprice}
            onChangeText={(text) => setMinprice(text)}
            placeholder="Enter pickup location"
            keyboardType="numeric"
          />
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 16, fontFamily: "SemiBold" }}>
            What is your Max Price or Charge?
          </Text>
          <TextInput
            style={[styles.textInput]}
            value={maxprice}
            onChangeText={(text) => setMaxprice(text)}
            placeholder="Enter pickup location"
            keyboardType="numeric"
          />
        </View>
        {/* Pi
        ckup Time */}
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
        <View style={[styles.views, { marginTop: 48 }]}>
          <Text
            style={{
              fontFamily: "Medium",
              color: "#000",
              fontSize: 16,
            }}
          >
            Which of these types of parcels can you deliver? Options are:
          </Text>
        </View>
        <View style={styles.container}>
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
              value={lightParcelChecked}
              onValueChange={handleLightParcelToggle}
            />
            <Text
              style={{ color: "#000", fontFamily: "Regular", fontSize: 16 }}
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
              value={heavyParcelChecked}
              onValueChange={handleHeavyParcelToggle}
            />
            <Text
              style={{ color: "#000", fontFamily: "Regular", fontSize: 16 }}
            >
              Heavy parcels that can fit into my car boot.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 200,
          }}
        >
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
            onPress={handleSubmit}
            // disabled={!isFormValid}
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

          <Text
            style={{
              color: "red",
              fontSize: 16,
              textAlign: "center",
              fontFamily: "Medium",
              marginTop: 16,
            }}
          >
            {" "}
            {isFormValid ? "Complete All Forms to Proceed" : null}
          </Text>
        </View>

        <View>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
                  color: "black",
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
                  value={lightParcelChecked}
                  onValueChange={handleLightParcelToggle}
                />
                <Text
                  style={{ color: "#000", fontFamily: "Regular", fontSize: 16 }}
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
                  value={heavyParcelChecked}
                  onValueChange={handleHeavyParcelToggle}
                />
                <Text
                  style={{ color: "#000", fontFamily: "Regular", fontSize: 16 }}
                >
                  Heavy parcels that can fit into my car boot.
                </Text>
              </View>
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
              onPress={handleSubmit}
              // disabled={!isFormValid}
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
            <Text
              style={{
                color: "red",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Medium",
              }}
            >
              {" "}
              {!isFormValid ? "Complete All Forms to Proceed" : null}
            </Text>
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
  dropdown: {
    height: 55,
    // borderColor: `${theme.text}65`,
    //  borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    // color: gray
    backgroundColor: "#f9f9f9",
  },
  checkbox: {},
});

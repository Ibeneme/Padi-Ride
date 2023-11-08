import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { registerUser } from "../../Redux/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchUserProfile, updateUserProfile } from "../../Redux/Users/User";

const UpdateProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLoading, userProfile} = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleFirstNameChange = (firstName) => {
    setError("");
    setEmail("");
    setFirstNameError("");
    const formattedName = firstName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setFirstName(formattedName);
  };

  console.log(isLoading, "firstName");
  console.log(lastName, "firstName");

  const handleLastNameChange = (lastName) => {
    setError("");
    setEmail("");
    setLastNameError("");
    const formattedName = lastName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setLastName(formattedName);
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setError("");
    setEmail("");
    setPhoneNumberError("");
    setPhoneNumber(phoneNumber);
    console.log(phoneNumber, "   setPhoneNumber(phoneNumber);");
    const phoneNumberPattern = /^\d+$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
      setPhoneNumberError("Phone number should contain only numbers.");
    } else if (phoneNumber.length < 11) {
      setPhoneNumberError(
        "Phone number should contain a minimum of 11 digits."
      );
    } else {
      setPhoneNumber(phoneNumber);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Update your profile",
      headerStyle: {
        backgroundColor: "#ffffff",
      },
      headerTitleStyle: {
        fontFamily: "Regular",
        color: "#000000",
        borderBottomWidth: 0,
      },
      headerTintColor: "#000000",
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  const handleLogin = () => {
    setLoading(true);
    setEmail("");

    if (phoneNumberError || firstNameError || lastNameError) {
      setLoading(false);
      console.log("Registration has errors. Please fix the errors.");
      return;
      // Do not proceed with registration if there are errors
    }
    // if (!firstName || !lastName || !phoneNumber) {
    //   setError("Please fill in all input fields.");
    //   setLoading(false);
    //   return;
    // }
    const userData = {
      first_name: firstName ? firstName : userProfile?.first_name,
      last_name: lastName ? lastName : userProfile?.last_name,
      phone_number: phoneNumber ? phoneNumber : userProfile?.phone_number,
    };

    setLoading(true);
    console.log(userData, "userData");

    dispatch(updateUserProfile(userData))
      .then((response) => {
        setLoading(false);
        console.log("Registration successful:", response);
        //console.log(response.payload?.request, "res.data._response");
        const id = response?.payload?.data?.id;
        if (response.type === "user/updateUserProfile/fulfilled") {
          setEmail("Profile Updated Successfully");
        }

        // If registration is successful, you can navigate to the next screen here
        // For example: navigation.navigate("verify");
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error.request, 'error.data._response')

        console.log("Registration error:", error.message);
      });
  };

  const [userProfiles, setUserProfile] = useState("");

  useEffect(() => {
    if (isLoading === true) {
      dispatch(fetchUserProfile())
        .then((response) => {
          console.log('dispatched');
          setUserProfile(response?.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={[styles.containerfirst, {}]}>
          <View>
            <Text style={[styles.textBold, { color: "#000", marginTop: 24 }]}>
              Update your profile
            </Text>
            {/* <Text
              style={styles.text}
              onPress={() =>
                //navigation.navigate("SignIn")
                navigation.navigate("verify")
              }
            >
              Already have an Account?{" "}
              <Text style={styles.textSpan}>Login</Text>
            </Text> */}
          </View>

          <View style={styles.viewForInputs}>
            {error ? (
              <Text
                style={[
                  styles.errorText,
                  { backgroundColor: "#ff000025", padding: 12 },
                ]}
              >
                {error}
              </Text>
            ) : null}

            {email ? (
              <Text
                style={[
                  styles.errorText,
                  {
                    backgroundColor: "#515FDF25",
                    padding: 12,
                    color: "#515FDF",
                  },
                ]}
              >
                {email}
              </Text>
            ) : null}

            <View>
              <Text style={styles.text}>First Name</Text>
              <TextInput
                style={[
                  styles.input,
                  firstNameError && { borderColor: "red" },
                  focusedInput === "firstName" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("firstName")}
                onBlur={() => setFocusedInput(null)}
                value={firstName}
                onChangeText={handleFirstNameChange}
                placeholder={userProfile?.first_name}
                placeholderTextColor={`${"#000000"}60`}
              />
              {firstNameError ? (
                <Text style={styles.errorText}>{firstNameError}</Text>
              ) : null}
              {/* <View 
              style={{
                backgroundColor:'#515FDF'
              }}>
                <Text>First name, Last Name and Middle Name if any</Text>
              </View> */}
            </View>

            <View>
              <Text style={styles.text}>Last Name</Text>
              <TextInput
                style={[
                  styles.input,
                  lastNameError && { borderColor: "red" },
                  focusedInput === "lastName" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("lastName")}
                onBlur={() => setFocusedInput(null)}
                value={lastName}
                onChangeText={handleLastNameChange}
                placeholder={userProfile?.last_name}
                placeholderTextColor={`${"#000000"}60`}
              />
              {lastNameError ? (
                <Text style={styles.errorText}>{lastNameError}</Text>
              ) : null}
              {/* <View 
              style={{
                backgroundColor:'#515FDF'
              }}>
                <Text>First name, Last Name and Middle Name if any</Text>
              </View> */}
            </View>

            <View>
              <Text style={styles.text}>Phone Number</Text>
              <TextInput
                style={[
                  styles.input,
                  phoneNumberError && { borderColor: "red" },
                  focusedInput === "email" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("phoneNumber")}
                onBlur={() => setFocusedInput(null)}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                placeholder={userProfile?.phone_number}
                placeholderTextColor={`${"#000000"}60`}
                keyboardType="numeric"
              />
              {phoneNumberError ? (
                <Text style={styles.errorText}>{phoneNumberError}</Text>
              ) : null}
            </View>
          </View>
          {error ? (
            <Text
              style={[
                styles.errorText,
                {
                  backgroundColor: "#ff000025",
                  padding: 12,
                  marginBottom: 12,
                  marginTop: -24,
                },
              ]}
            >
              {error}
            </Text>
          ) : null}

          <View>
            <TouchableOpacity style={styles.buttonClick} onPress={handleLogin}>
              <Text
                style={[
                  styles.buttonText,
                  { fontFamily: "Bold", color: "#fff" },
                ]}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  "Update Profile"
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    //  borderColor: `${'#000000'}60`,
    color: "#000000",
    padding: 10,
    borderRadius: 5,
    fontFamily: "Regular",
    fontSize: 16,
    height: 55,
    marginTop: 4,
    width: "100%",
  },
  errorText: {
    color: "#ff0650",
    marginTop: 4,
    fontSize: 14,
    fontFamily: "Regular",
  },
  forgotPassword: {
    color: "#000000",
    marginTop: -12,
    fontSize: 14,
    textAlign: "right",
    fontFamily: "Regular",
  },
  passwordtext: {
    textAlign: "right",
    marginTop: 12,
    color: "#000000",
    fontFamily: "Regular",
    fontSize: 14,
  },
  buttonClick: {
    backgroundColor: "#515FDF",
    width: "100%",
    height: 55,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClickLoading: {
    backgroundColor: "#515FDF45",
    width: "100%",
    height: 50,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  passwordVisibilityIcon: {
    position: "absolute",
    bottom: "10%",
    right: 0,
    padding: 10,
    color: "#000000",
    fontFamily: "Regular",
  },
  containerfirst: {
    color: "#ffffff",
    height: "100%",
    padding: 16,
  },
  text: {
    color: "#000000",
    marginTop: 4,
    fontFamily: "Regular",
    fontSize: 16,
  },
  textBold: {
    color: "#515FDF",
    fontFamily: "Bold",
    fontSize: 24,

    marginTop: 48,
  },
  textSpan: {
    color: "#515FDF",
    fontFamily: "Regular",
    fontSize: 16,
    paddingLeft: 8,
  },
  viewForInputs: {
    marginTop: 48,
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 72,
  },
});

export default UpdateProfile;

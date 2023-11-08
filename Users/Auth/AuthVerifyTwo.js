import React, { useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { resendOTP, verifyOTP } from "../../Redux/Auth/Auth";

const AuthVerifyTwo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [nots, setNotification] = useState("");

  const route = useRoute();
  const { emailAddress, id } = route.params;

  
  //console.log(emailAddress, id, "idddd");
  // const handleLogin = () => {
  //   setLoading(true);
  //   navigation.navigate("success");
  // };

  const handleLogin = () => {
    setNotification("");

    const otpData = {
      // Construct your OTP data here
    };

    dispatch(verifyOTP(email))
      .then((response) => {
        console.log("OTP Verification successfull:", response);
        if (response.payload?.Success === "Account is verified") {
          navigation.navigate("newpass");
        }
        if (
          response?.payload?.request?._response ===
          `{"error":"Invalid or expired OTP"}`
        ) {
          setError("Invalid or expired OTP");
        }
      })
      .catch((error) => {
        // setError(error);
        console.log("OTP Verification error:", error);
      });
  };

  const handleResendOTP = () => {
    setNotification("");
    setError("");
    const otpData = {
      email: emailAddress,
      id: id,
    };

    dispatch(resendOTP(otpData))
      .then((response) => {
        console.log("Resend OTP successful:", response);
        if (response.type === "registration/resendOTP/fulfilled") {
          setNotification("OTP Resend to mail Successful");
        }
      })
      .catch((error) => {
        console.error("Resend OTP error:", error);
        // Handle OTP resend error here
      });
  };

  const handleEmailChange = (email) => {
    setError("");
    setEmailError("");
    console.log(email, "email");
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setError("");
    setPasswordError("");
    setPassword(password);
  };

  //const { theme } = useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const headerStyle = {
    backgroundColor: "#ffffff",
  };

  const headerTitleStyle = {
    color: "#000000",
    borderBottomWidth: 0,
  };

  const headerTintColor = "#000000";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Verify",
      headerStyle,
      headerTitleStyle: {
        fontFamily: "Regular",
      },
      headerTintColor,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

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
            <Text style={styles.textBold}>Verify your account</Text>

            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.text}>
                Didnt get OTP <Text style={styles.textSpan}>Resend</Text>
              </Text>
            </TouchableOpacity>
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
            {nots ? (
              <Text
                style={[
                  styles.errorText,
                  {
                    backgroundColor: "#515FDF25",
                    color: "#515FDF",
                    padding: 12,
                  },
                ]}
              >
                {nots}
              </Text>
            ) : null}
            <View>
              <Text style={styles.text}>OTP</Text>
              <TextInput
                style={[
                  styles.input,
                  emailError && { borderColor: "red" },
                  focusedInput === "OTP" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter OTP"
                placeholderTextColor={`${"#000000"}60`}
              />
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
            </View>

            {/* <TouchableOpacity>
              <Text style={styles.forgotPassword}>Didn't get Otp, Resend</Text>
            </TouchableOpacity> */}
          </View>
          <View>
            <TouchableOpacity style={styles.buttonClick} onPress={handleLogin}>
              <Text
                style={[
                  styles.buttonText,
                  { fontFamily: "Bold", color: "#fff" },
                ]}
              >
                {loading ? <ActivityIndicator color="#fff" /> : "Submit"}
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

export default AuthVerifyTwo;

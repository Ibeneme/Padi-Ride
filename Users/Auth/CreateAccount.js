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
import Icon from "react-native-vector-icons/FontAwesome";
import { passwordReset, registerUser, resendOTP } from "../../Redux/Auth/Auth";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const AuthSignInNew = () => {
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Create an Account",
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

    if (passwordError || confirmPasswordError) {
      setLoading(false);
      console.log("Please fill in all input fields.");
      return; // Do not proceed with registration if there are errors
    }
    if (!password || !confirmPassword) {
      setError("Please fill in all input fields.");
      setLoading(false);
      return;
    }
    const userData = {
      password: password,
      password2: confirmPassword,
      otp: otp
    };

    setLoading(true);
    console.log(userData, "userData");

    dispatch(passwordReset(userData))
      .then((response) => {
        setLoading(false);
        console.log("Registration successful:", response?.payload);
        //console.log(response.payload?.request, "res.data._response");
        //const id = response?.payload?.data?.id;
        if (
          response.payload.message ===
          "User Created Successfully. Check your phone for an OTP"
        ) {
          navigation.navigate("success", {
            emailAddress: email,
            id: id,
          });
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

  const handleEmailChange = (email) => {
    setEmailError("");
    const formattedEmail = email
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());

    setEmail(formattedEmail);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValidEmail = emailPattern.test(formattedEmail);

    setEmailError(
      isValidEmail
        ? ""
        : `Please Enter a Valid Email address, Hint: "Example@mail.com" `
    );

    if (isValidEmail) {
      setEmailError("");
    }
    if (isValidEmail === " ") {
      setEmailError("");
    }
  };

  const handlePasswordChange = (password) => {
    setPasswordError("");

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(password, "oassword");
    if (!password.match(passwordRegex)) {
      // Invalid password format
      setPasswordError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long"
      );
      return;
    }

    setPassword(password);
  };

  const handleConfirmPasswordChange = (confirmPassword) => {
    setConfirmPasswordError("");
    setConfirmPassword(confirmPassword);
    // Assuming you have a `password` state that stores the original password
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    setConfirmPassword(confirmPassword);
    console.log(confirmPassword, "confrimPassword");
  };

  //const { theme } = useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const route = useRoute();
  const { otp } = route.params;

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
            <Text style={styles.textBold}>Reset your Password</Text>
            <Text
              style={styles.text}
              onPress={() =>
                //navigation.navigate("SignIn")
                navigation.navigate("SignIn")
              }
            >
              Already have an Account?{" "}
              <Text style={styles.textSpan}>Login</Text>
            </Text>
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

            <View>
              <Text style={styles.text}>Create Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    passwordError ? { borderColor: "red" } : null,
                    focusedInput === "password"
                      ? { borderColor: "#515FDF" }
                      : null,
                  ]}
                  // value={password}
                  onChangeText={handlePasswordChange}
                  placeholder="Enter Password"
                  secureTextEntry={!showPassword}
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  placeholderTextColor={`${"#000000"}60`}
                />
                <TouchableOpacity
                  style={styles.passwordVisibilityIcon}
                  onPress={togglePasswordVisibility}
                >
                  <Icon
                    name={showPassword ? "eye-slash" : "eye"}
                    size={20}
                    color={`${"#000000"}`}
                  />
                </TouchableOpacity>
              </View>

              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </View>

            <View>
              <Text style={styles.text}>Confirm Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    confirmPasswordError ? { borderColor: "red" } : null,
                    focusedInput === "confirmPassword" && {
                      borderColor: "#515FDF",
                    },
                  ]}
                  value={confirmPassword}
                  onChangeText={handleConfirmPasswordChange}
                  placeholder="Enter Password"
                  secureTextEntry={!showPassword}
                  onFocus={() => setFocusedInput("confirmPassword")}
                  onBlur={() => setFocusedInput(null)}
                  placeholderTextColor={`${"#000000"}60`}
                />
                <TouchableOpacity
                  style={styles.passwordVisibilityIcon}
                  onPress={togglePasswordVisibility}
                >
                  <Icon
                    name={showPassword ? "eye-slash" : "eye"}
                    size={20}
                    color={`${"#000000"}`}
                  />
                </TouchableOpacity>
              </View>

              {confirmPasswordError ? (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
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

export default AuthSignInNew;

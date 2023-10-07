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
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
//import { useDispatch } from "react-redux";

const AuthCreateAccount = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();n
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    navigation.navigate("verify")
  };

  const handleEmailChange = (email) => {
    setError("");
    setEmailError("");
    const formattedEmail = email
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setEmail(formattedEmail);
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
      title: "Create an Account",
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
            <Text style={styles.textBold}>Welcome</Text>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("SignIn")}
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
              <Text style={styles.text}>Full Name</Text>
              <TextInput
                style={[
                  styles.input,
                  emailError && { borderColor: "red" },
                  focusedInput === "email" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter Full Name"
                placeholderTextColor={`${"#000000"}60`}
              />
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
              {/* <View 
              style={{
                backgroundColor:'#515FDF'
              }}>
                <Text>First name, Last Name and Middle Name if any</Text>
              </View> */}
            </View>

            <View>
              <Text style={styles.text}>Email Address</Text>
              <TextInput
                style={[
                  styles.input,
                  emailError && { borderColor: "red" },
                  focusedInput === "email" && { borderColor: "#515FDF" },
                ]}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter Email Address"
                placeholderTextColor={`${"#000000"}60`}
              />
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={styles.text}>Create Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    passwordError && { borderColor: "red" },
                    focusedInput === "password" && { borderColor: "#515FDF" },
                  ]}
                  value={password}
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
                    passwordError && { borderColor: "red" },
                    focusedInput === "password" && { borderColor: "#515FDF" },
                  ]}
                  value={password}
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
          </View>
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
                  "Create Account"
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthCreateAccount;

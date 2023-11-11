import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../Users/Auth/Auth";
import AuthSignIn from "../Users/Auth/AuthSignIn";
import AuthCreateAccount from "../Users/Auth/AuthCreateAccount";
import AuthForgotPassword from "../Users/Auth/AuthForgotPassword";
import AuthVerify from "../Users/Auth/AuthVerify";
import AuthSuccess from "../Users/Auth/AuthSuccess";
import AuthVerifyTwo from "../Users/Auth/AuthVerifyTwo";
import AuthSignInNew from "../Users/Auth/CreateAccount";
import OnboardingOne from "../Users/Onboarding/Onboarding";
import OnboardingTwo from "../Users/Onboarding/OnboardingOne";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
        component={Welcome}
      /> */}
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={OnboardingOne}
      />
      <Stack.Screen
        name="OnboardingTwo"
        options={{ headerShown: false }}
        component={OnboardingTwo}
      />

      <Stack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={Auth}
      />
      <Stack.Screen name="SignIn" component={AuthSignIn} />
      <Stack.Screen name="createAccount" component={AuthCreateAccount} />
      <Stack.Screen name="forgotPassword" component={AuthForgotPassword} />
      <Stack.Screen name="verify" component={AuthVerify} />
      <Stack.Screen name="AuthVerifyTwo" component={AuthVerifyTwo} />
      <Stack.Screen name="success" component={AuthSuccess} />
      <Stack.Screen name="newpass" component={AuthSignInNew} />
    </Stack.Navigator>
  );
}

export default AuthStack;

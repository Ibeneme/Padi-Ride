import { createStackNavigator } from "@react-navigation/stack";
import Test from "../Users/Auth/Test";
import MyTabs from "./BottomNavigation";
import Welcome from "../Users/Auth/Welcome";
import Auth from "../Users/Auth/Auth";
import AuthSignIn from "../Users/Auth/AuthSignIn";
import AuthCreateAccount from "../Users/Auth/AuthCreateAccount";
import AuthForgotPassword from "../Users/Auth/AuthForgotPassword";
import AuthVerify from "../Users/Auth/AuthVerify";
import AuthSuccess from "../Users/Auth/AuthSuccess";
import CreatePost from "../Users/Components/CreatePost";
import CreateDelivery from "../Users/Deliver/CreateDelivery";
import DeliverySummary from "../Users/Deliver/DeliverySummary";
import DeliverySuccess from "../Users/Deliver/Success";
import CreateParcel from "../Users/Parcel/CreateParcel";
import DeliverySummaryParcel from "../Users/Parcel/DeliveryParcel";
import TravellersDetails from "../Users/Parcel/TravellersName";
import TravellersMessage from "../Users/Parcel/Message";
import ParcelPayment from "../Users/Parcel/Payment";
import Passenger from "../Users/Passenger/CreateDelivery";
import PassengerSummary from "../Users/Passenger/PassengerSummary";
import PassengerSuccess from "../Users/Passenger/Success";
import CreateRide from "../Users/JoinRide/Join";
import RideSummary from "../Users/JoinRide/JoinTwo";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
        component={Welcome}
      /> */}
      <Stack.Screen
        name="drawer"
        options={{ headerShown: false }}
        component={MyTabs}
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
      <Stack.Screen name="success" component={AuthSuccess} />

      {/* Posts */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="createPost"
        component={CreatePost}
      />

      {/* Delivery */}
      <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
      <Stack.Screen name="DeliverySummary" component={DeliverySummary} />
      <Stack.Screen
        name="DeliverySuccess"
        options={{ headerShown: false }}
        component={DeliverySuccess}
      />

      {/* Parcel */}
      <Stack.Screen name="CreateParcel" component={CreateParcel} />
      <Stack.Screen
        name="DeliverySummaryParcel"
        component={DeliverySummaryParcel}
      />
      <Stack.Screen name="TravellersDetails" component={TravellersDetails} />
      <Stack.Screen name="message" component={TravellersMessage} />
      <Stack.Screen name="payment" component={ParcelPayment} />

      {/* Parcel */}
      <Stack.Screen name="passengers" component={Passenger} />
      <Stack.Screen name="PassengerSummary" component={PassengerSummary} />
      <Stack.Screen name="PassengerSuccess" component={PassengerSuccess} />

      {/* Join a Ride */}
      <Stack.Screen name="CreateRide" component={CreateRide} />
      <Stack.Screen name="RideSummary" component={RideSummary} />
   
    </Stack.Navigator>
  );
}

export default MyStack;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Users/Menu/Home";
import Deliver from "../Users/Menu/Deliver";
import JoinRide from "../Users/Menu/JoinRide";
import Passenger from "../Users/Menu/Passenger";
import { View, StatusBar, Text } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import User from "../Users/Menu/User";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const tabBarIconStyle = {
    width: 24,
  };
  const tabBarLabelStyle = {
    fontFamily: "Regular",
    fontSize: 18,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarActiveBackgroundColor: "#FDD037",
        // tabBarInactiveTintColor: 'green',
        //tabBarActiveTintColor: "#000000",
        // activeTintColor: "#000000",
        //headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 12,
        },
        headerStyle: {
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#515FDF" : "#66666666", fontSize: 14 },
              ]}
            >
              Home
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#515FDF" : "#66666666" },
              ]}
              name="home"
              size={20}
            />
          ),
        }}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#515FDF" : "#66666666", fontSize: 14 },
              ]}
            >
              Deliver
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#515FDF" : "#66666666" },
              ]}
              name="truck"
              size={20}
            />
          ),
        }}
        name="Deliver"
        component={Deliver}
      />

      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#515FDF" : "#66666666", fontSize: 14 },
              ]}
            >
              Passenger
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#515FDF" : "#66666666" },
              ]}
              name="users"
              size={20}
            />
          ),
        }}
        name="Passenger"
        component={Passenger}
      /> */}

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#515FDF" : "#66666666", fontSize: 14 },
              ]}
            >
              Join a Ride
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#515FDF" : "#66666666" },
              ]}
              name="car"
              size={20}
            />
          ),
        }}
        name="JoinRide"
        component={JoinRide}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabBarLabelStyle,
                { color: focused ? "#515FDF" : "#66666666", fontSize: 14 },
              ]}
            >
              Profile
            </Text>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              style={[
                tabBarIconStyle,
                { color: focused ? "#515FDF" : "#66666666" },
              ]}
              name="user"
              size={20}
            />
          ),
        }}
        name="user"
        component={User}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

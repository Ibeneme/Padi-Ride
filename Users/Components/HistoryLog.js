import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HistoryLogs = ({ receiversName, icon, location, price }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        padding: 12,
        borderRadius: 14,
      }}
    >
      {/* Left side with icon and information */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#515FDF12",
            justifyContent: "center",
            alignItems: "center",
            width: 48,
            height: 48,
            borderRadius: 3333,
          }}
        >
          <FontAwesome5 name={icon} size={18} color="#515FDF" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "SemiBold",
            }}
          >
            {receiversName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular",
              color: "gray",
            }}
          >
            {location}
          </Text>
        </View>
      </View>

      {/* Right side with price */}
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Regular",
          color: "gray",
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export default HistoryLogs;

import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 50,
  iconColor = "white",
  backgroundColor = "black",
  style,
}) {
  return (
    <View
      style={[
        {
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

export default Icon;

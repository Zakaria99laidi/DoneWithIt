import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({
  name = "trash-can",
  color = "white",
  size = 30,
  bgcolor = "primary",
}) {
  return (
    <View style={[styles.iconContainer, { backgroundColor: colors[bgcolor] }]}>
      <MaterialCommunityIcons name={name} size={size} color={colors[color]} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
export default Icon;

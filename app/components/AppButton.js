import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import Text from "./AppText";

function AppButton({
  title,
  color = "primary",
  width = "100%",
  onPress,
  style,
  styleText,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: colors[color], width: width },
        style,
      ]}
    >
      <Text style={[styles.text, styleText]}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 7,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;

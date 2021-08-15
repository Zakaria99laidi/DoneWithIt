import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";

function AppTextInput({ icon, style, width, ...otherProps }) {
  return (
    <View style={[styles.container, style, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.zoneInput]}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 25,
    width: "100%",
    paddingHorizontal: 15,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  zoneInput: {
    flex: 1,
  },
});

export default AppTextInput;

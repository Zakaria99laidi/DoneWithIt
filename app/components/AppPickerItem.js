import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

function AppPickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});

export default AppPickerItem;

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

function PickerItem({ item, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  label: {
    //marginTop: 5,
    //textAlign: "center",
  },
});

export default PickerItem;

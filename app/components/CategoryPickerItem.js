import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Icon
        name={item.icon.name}
        backgroundColor={item.icon.backgroundColor}
        size={80}
      />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;

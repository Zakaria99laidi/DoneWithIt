import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.Separator} />;
}

const styles = StyleSheet.create({
  Separator: {
    width: "100%",
    height: 1.5,
    backgroundColor: colors.light,
  },
});
export default ListItemSeparator;

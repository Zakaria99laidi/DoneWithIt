import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import colors from "../config/colors";
import Text from "./Text";

function OfflineNotice() {
  const netinfo = useNetInfo();
  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },
});

export default OfflineNotice;

import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;

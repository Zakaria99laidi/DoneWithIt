import React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={40} color={colors.white} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={40}
            color={colors.white}
          />
        </View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.Img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  iconContainer: {
    width: "100%",
    height: "5%",
    marginBottom: 5,
  },
  closeIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    top: "20%",
    left: "5%",
    position: "absolute",
  },
  deleteIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    top: "20%",
    right: "5%",
    position: "absolute",
  },
  Img: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;

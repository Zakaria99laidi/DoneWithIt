import React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <View style={styles.closeicon}></View>
        <View style={styles.deleteicon}></View>
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
    backgroundColor: "#000",
  },
  Img: {
    //flex: 15,
    width: "100%",
    height: "100%",
    marginTop: 10,
  },
  closeicon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fc5c65",
  },
  deleteicon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#4ECDC4",
  },
});
export default ViewImageScreen;

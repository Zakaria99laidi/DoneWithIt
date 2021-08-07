import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

const WelcomeScreen = () => (
  <ImageBackground
    source={require("../assets/background.jpg")}
    style={styles.Imgbackground}
    resizeMode="cover"
  >
    <View style={styles.logoinfo}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Text style={styles.text}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.loginbutton}></View>
    <View style={styles.registerbutton}></View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  Imgbackground: {
    flex: 1,
  },
  logoinfo: {
    flex: 8,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 80,
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
  },
  loginbutton: {
    flex: 1,
    backgroundColor: "#fc5c65",
  },
  registerbutton: {
    flex: 1,
    backgroundColor: "#4ECDC4",
  },
});

export default WelcomeScreen;

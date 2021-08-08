import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";

import Button from "../components/AppButton";
import Text from "../components/AppText";

const WelcomeScreen = () => (
  <ImageBackground
    source={require("../assets/background.jpg")}
    style={styles.ImgBackground}
    resizeMode="cover"
    blurRadius={4}
  >
    <View style={styles.logoContainer}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Text style={styles.textLine}>Sell What You Don't Need</Text>
    </View>
    <Button title="login" />
    <Button title="register" color="secondary" />
  </ImageBackground>
);

const styles = StyleSheet.create({
  ImgBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textLine: {
    marginVertical: 15,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;

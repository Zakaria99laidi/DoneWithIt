import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";

import Button from "../components/Button";
import Text from "../components/Text";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
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
      <Button title="login" onPress={() => navigation.navigate(routes.LOGIN)} />
      <Button
        title="register"
        color="secondary"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </ImageBackground>
  );
}

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

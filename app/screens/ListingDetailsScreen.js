import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Text from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";

function ListingDetailsScreen({
  image = require("../assets/camera.jpg"),
  title = "Nice Camera",
  subTitle = "100$",
}) {
  return (
    <Screen style={styles.container}>
      <Image source={image} style={styles.Img} />
      <View style={styles.info}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subTitle}> {subTitle} </Text>
      </View>
      <ListItem />
      <ListItem />
      <ListItem />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  Img: {
    width: "100%",
    height: "35%",
  },
  info: {
    padding: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: "700",
    marginBottom: 5,
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ListingDetailsScreen;

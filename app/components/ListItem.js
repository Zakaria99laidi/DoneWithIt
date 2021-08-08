import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import Text from "./AppText";

function ListItem({
  image = require("../assets/zaki2.jpg"),
  name = "Laidi Zakaria",
  listing = "5 Listings",
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.Img} />
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.name}> {name} </Text>
        <Text style={styles.listing}> {listing} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  Img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 5,
  },
  name: {
    fontWeight: "500",
  },
  listing: {
    color: colors.medium,
    fontSize: 14,
    marginLeft: 2,
  },
});

export default ListItem;

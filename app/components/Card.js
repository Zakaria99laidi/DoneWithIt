import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Text from "./AppText";

function Card({
  image = require("../assets/jacket.jpg"),
  title = "Red Jacket for Sale!",
  subTitle = "100$",
  style,
  styleImg,
}) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={[styles.Img, styleImg]} />
      <View style={styles.infoCard}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subTitle}> {subTitle} </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginVertical: 7,
    overflow: "hidden",
    //width: "100%",
  },
  Img: {
    width: "100%",
    height: 200,
  },
  infoCard: {
    padding: 10,
    paddingVertical: 7,
  },
  title: {
    marginBottom: 3,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default Card;

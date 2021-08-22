import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({
  imageUrl = require("../assets/jacket.jpg"),
  onPress,
  title = "Red Jacket for Sale!",
  subTitle = "100$",
  style,
  styleImg,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={[styles.card, style]}>
        <Image source={{ uri: imageUrl }} style={[styles.Img, styleImg]} />
        <View style={styles.infoCard}>
          <Text style={styles.title} numberOfLines={2}>
            {" "}
            {title}{" "}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
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

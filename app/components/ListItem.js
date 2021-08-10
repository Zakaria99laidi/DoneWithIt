import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../config/colors";
import Text from "./AppText";

function ListItem({
  image = require("../assets/zaki2.jpg"),
  title = "Laidi Zakaria",
  description = "5 Listings",
  style,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.container, style]}>
          <Image source={image} style={styles.Img} />
          <View style={styles.textContainer}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.description}> {description} </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //backgroundColor: colors.grey,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 4,
  },
  Img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: "500",
  },
  description: {
    color: colors.medium,
    fontSize: 14,
    marginLeft: 2,
  },
  textContainer: {
    justifyContent: "center",
    width: "80%",
  },
});

export default ListItem;

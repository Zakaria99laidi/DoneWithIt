import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../config/colors";
import Text from "./AppText";
import Icon from "./Icon";

function ListItem({
  image,
  iconComponent,
  title,
  description,
  style,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.container, style]}>
          {iconComponent}
          {image && <Image source={image} style={styles.Img} />}
          <View style={styles.detailsContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  Img: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  description: {
    color: colors.medium,
    fontSize: 14,
    marginLeft: 2,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    width: "80%",
  },
});

export default ListItem;

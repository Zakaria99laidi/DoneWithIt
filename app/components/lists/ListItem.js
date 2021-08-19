import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Text from "../Text";

function ListItem({
  image,
  iconComponent,
  title,
  description,
  style,
  onPress,
  renderRightActions,
  showChevrons = true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.container, style]}>
          {iconComponent}
          {image && <Image source={image} style={styles.Img} />}
          <View style={styles.detailsContainer}>
            {title && (
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            )}
            {description && (
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingHorizontal: 15,
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
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
});

export default ListItem;

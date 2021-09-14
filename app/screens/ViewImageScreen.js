import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";

function ViewImageScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: listing.images[0].url }}
        resizeMode="contain"
        style={styles.Img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  Img: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;

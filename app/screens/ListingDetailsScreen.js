import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../components/Text";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        uri={listing.images[0].url}
        style={styles.Img}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.price + " $"}</Text>
      </View>
      <ListItem
        image={require("../assets/zaki2.jpg")}
        title="Laidi Zakaria"
        description="5 Listings"
        style={{ marginVertical: 5 }}
      />
      <ListItem
        image={require("../assets/zaki2.jpg")}
        title="Laidi Zakaria"
        description="5 Listings"
        style={{ marginVertical: 5 }}
      />
      <ListItem
        image={require("../assets/zaki2.jpg")}
        title="Laidi Zakaria"
        description="5 Listings"
        style={{ marginVertical: 5 }}
      />
    </View>
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

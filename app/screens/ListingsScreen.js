import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    image: require("../assets/camera.jpg"),
    title: "Nice Camera",
    subTitle: "200$",
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "a beautiful couch!",
    subTitle: "150$",
  },
  {
    id: 3,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket for Sale!",
    subTitle: "100$",
  },
  {
    id: 4,
    image: require("../assets/camera.jpg"),
    title: "Nice Camera",
    subTitle: "200$",
  },
  {
    id: 5,
    image: require("../assets/couch.jpg"),
    title: "a beautiful couch!",
    subTitle: "150$",
  },
  {
    id: 6,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket for Sale!",
    subTitle: "100$",
  },
];

function ListingsScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 40,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
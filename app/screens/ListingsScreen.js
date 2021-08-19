import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    image: require("../assets/camera.jpg"),
    title: "Nice Camera",
    subTitle: "200",
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "a beautiful couch!",
    subTitle: "150",
  },
  {
    id: 3,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket for Sale!",
    subTitle: "100",
  },
  {
    id: 4,
    image: require("../assets/camera.jpg"),
    title: "Nice Camera",
    subTitle: "200",
  },
  {
    id: 5,
    image: require("../assets/couch.jpg"),
    title: "a beautiful couch!",
    subTitle: 150,
  },
  {
    id: 6,
    image: require("../assets/jacket.jpg"),
    title: "Red Jacket for Sale!",
    subTitle: 100.5,
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={{ paddingVertical: 10 }}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.subTitle + " $"}
            style={{ marginVertical: 7 }}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default ListingsScreen;

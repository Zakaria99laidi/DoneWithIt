import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {error ? (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="retry" onPress={loadListings} />
        </>
      ) : (
        <FlatList
          style={{ paddingVertical: 10 }}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.images[0].url}
              title={item.title}
              subTitle={item.price + " $"}
              style={{ marginVertical: 7 }}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    alignItems: "center",
    //justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default ListingsScreen;

// const listings = [
//   {
//     id: 1,
//     image: require("../assets/camera.jpg"),
//     title: "Nice Camera",
//     subTitle: "200",
//   },
//   {
//     id: 2,
//     image: require("../assets/couch.jpg"),
//     title: "a beautiful couch!",
//     subTitle: "150",
//   },
//   {
//     id: 3,
//     image: require("../assets/jacket.jpg"),
//     title: "Red Jacket for Sale!",
//     subTitle: "100",
//   },
//   {
//     id: 4,
//     image: require("../assets/camera.jpg"),
//     title: "Nice Camera",
//     subTitle: "200",
//   },
//   {
//     id: 5,
//     image: require("../assets/couch.jpg"),
//     title: "a beautiful couch!",
//     subTitle: 150,
//   },
//   {
//     id: 6,
//     image: require("../assets/jacket.jpg"),
//     title: "Red Jacket for Sale!",
//     subTitle: 100.5,
//   },
// ];

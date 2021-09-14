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

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
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
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
            refreshing={refreshing}
            onRefresh={() => loadListings()}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default ListingsScreen;

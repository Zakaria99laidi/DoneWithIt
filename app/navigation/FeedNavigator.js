import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.LISTINGS}
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
        animation: "fade",
      }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
      <Stack.Screen name={routes.VIEW_IMAGE} component={ViewImageScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;

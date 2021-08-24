import React, { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import colors from "./app/config/colors";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from "./app/components/Screen";
import NewListingButton from "./app/navigation/NewListingButton";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  // return (
  //   <Screen style={styles.container}>
  //     <NewListingButton />
  //   </Screen>
  // );

  const [a, setA] = useState(true);
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {a ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

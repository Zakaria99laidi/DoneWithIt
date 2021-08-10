import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Icon from "./app/components/Icon";

export default function App() {
  return <ListingsScreen />;
  // return (
  //   <View style={styles.container}>
  //     {/* <MessagesScreen /> */}
  //     {/* <Card
  //       image={require("./app/assets/camera.jpg")}
  //       title="Nice Camera!"
  //       subTitle="80$"
  //     />
  //     <Card
  //       image={require("./app/assets/couch.jpg")}
  //       title="Nice couch!"
  //       subTitle="100$"
  //     />
  //     <Card
  //       image={require("./app/assets/couch.jpg")}
  //       title="Nice Chair!"
  //       subTitle="80$"
  //     /> */}
  //     {/* <ListingDetailsScreen /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  testCard: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.grey,
  },
});

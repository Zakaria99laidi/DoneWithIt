import React, { createContext, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableHighlight,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import AppButton from "./app/components/Button";
import AppText from "./app/components/Text";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListItemDeleteAction from "./app/components/lists/ListItemDeleteAction";
import AppTextInput from "./app/components/TextInput";
import Screen from "./app/components/Screen";
import Picker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { ListItem } from "./app/components/lists";
import CategoryPickerItem from "./app/components/CategoryPickerItem";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import NewListingButton from "./app/navigation/NewListingButton";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  // return (
  //   <Screen style={styles.container}>
  //     <NewListingButton />
  //   </Screen>
  // );

  const [a, setA] = useState(true);
  return (
    <NavigationContainer theme={navigationTheme}>
      {a ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    //padding: 10,
  },
  testCard: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.grey,
  },
});

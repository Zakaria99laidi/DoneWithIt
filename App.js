import React, { useState } from "react";
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

export default function App() {
  return <AccountScreen />;

  // const [category, setCategory] = useState();
  // return (
  //   <Screen style={styles.container}>
  //     <View style={{ flexDirection: "row" }}>
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //     </View>
  //     <View style={{ flexDirection: "row" }}>
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //     </View>
  //     <View style={{ flexDirection: "row" }}>
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Furniture"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //       <CategoryPickerItem
  //         label="Movies & Music"
  //         icon={{ name: "floor-lamp", backgroundColor: "#fc5c65" }}
  //       />
  //     </View>
  //   </Screen>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    //alignItems: "center",
    //justifyContent: "center",
    padding: 10,
  },
  testCard: {
    width: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.grey,
  },
});

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import useAuth from "../auth/useAuth";

import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <ListItem
        style={styles.container}
        image={require("../assets/zaki.jpg")}
        title={user.name}
        description={user.email}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => {
                item.targetScreen && navigation.navigate(item.targetScreen);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        iconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
        showChevrons={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;

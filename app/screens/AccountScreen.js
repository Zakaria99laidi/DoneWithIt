import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

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
  return (
    <Screen style={styles.screen}>
      <ListItem
        style={styles.container}
        image={require("../assets/zaki2.jpg")}
        title="Laidi Zakaria"
        description="gz_laidi@esi.dz"
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
        onPress={() => navigation.navigate("logout")}
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

//
{
  /* <FlatList
  style={{ flex: 1, paddingTop: 20 }}
  data={data.slice(0, -1)}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <ListItem
      title={item.title}
      iconComponent={
        <Icon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
          //style={{ marginHorizontal: 7 }}
        />
      }
      //style={{ marginVertical: 2 }}
    />
  )}
  ItemSeparatorComponent={ListItemSeparator}
  ListFooterComponent={() => {
    const last = data[data.length - 1];
    return (
      <ListItem
        title={last.title}
        iconComponent={
          <Icon
            name={last.icon.name}
            backgroundColor={last.icon.backgroundColor}
            //style={{ marginHorizontal: 7 }}
          />
        }
        style={{ marginTop: 40 }}
      />
    );
  }}
  ListHeaderComponent={() => (
    <ListItem
      image={require("../assets/mosh.jpg")}
      title="Laidi Zakaria"
      description="gz_laidi@esi.dz"
      style={{ marginVertical: 10, marginBottom: 40 }}
    />
  )}
/> */
}

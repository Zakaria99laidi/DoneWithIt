import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import AppButton from "../components/AppButton";

const initialMessages = [
  {
    id: 1,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "Otmane Laidi",
    description: "this product is availble?",
    image: require("../assets/zaki2.jpg"),
  },
  {
    id: 3,
    title: "Zakaria Laidi",
    description: "do you have any other color like red or green?",
    image: require("../assets/zaki2.jpg"),
  },
  {
    id: 4,
    title: "Zakaria Laidi",
    description: "Is it availble ?",
    image: require("../assets/zaki3.jpg"),
  },
  {
    id: 5,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 6,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 7,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user2.jpg"),
  },
  {
    id: 8,
    title: "Otmane Laidi",
    description: "this product is availble?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 9,
    title: "Zakaria Laidi",
    description: "do you have any other color like red or green?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 10,
    title: "Zakaria Laidi",
    description: "Is it availble ?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 11,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 12,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/user.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  function handleDelete(message) {
    setMessages(messages.filter((m) => m.id !== message.id));
  }

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("item Tapped!")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 10,
    backgroundColor: colors.grey,
  },
});

export default MessagesScreen;

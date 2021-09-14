import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki.jpg"),
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
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 5,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 6,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 7,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki2.jpg"),
  },
  {
    id: 8,
    title: "Otmane Laidi",
    description: "this product is availble?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 9,
    title: "Zakaria Laidi",
    description: "do you have any other color like red or green?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 10,
    title: "Zakaria Laidi",
    description: "Is it availble ?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 11,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki.jpg"),
  },
  {
    id: 12,
    title: "Zakaria Laidi",
    description: "How much is that?",
    image: require("../assets/zaki.jpg"),
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
            onPress={() => null}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevrons={true}
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
    //backgroundColor: colors.medium,
  },
});

export default MessagesScreen;

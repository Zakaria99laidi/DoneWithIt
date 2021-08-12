import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import Text from "./AppText";
import Screen from "./Screen";
import AppPickerItem from "./AppPickerItem";

function AppPicker({
  icon,
  items,
  onSelectedItem,
  placeholder,
  placeholderColor,
  selectedItem,
  style,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <Text
            style={[
              styles.placeholder,
              {
                color: selectedItem
                  ? defaultStyles.colors.dark
                  : defaultStyles.colors[placeholderColor],
              },
            ]}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            title="close"
            style={{ alignSelf: "center", width: "50%" }}
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 25,
    width: "100%",
    paddingHorizontal: 15,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
  },
});

export default AppPicker;

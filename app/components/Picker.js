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
import Text from "./Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function Picker({
  icon,
  items,
  onSelectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
  placeholderColor,
  numColumns = 1,
  selectedItem,
  style,
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style, { width }]}>
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
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
            numColumns={numColumns}
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

export default Picker;

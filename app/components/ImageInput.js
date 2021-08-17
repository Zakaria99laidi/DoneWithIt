import React, { useEffect } from "react";
import {
  Alert,
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import Icon from "./Icon";

function ImageInput({ imageUri, onChangeImage, style }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (!granted) {
    //   alert("Sorry, you need to access to the image");
    // }
    return granted;
  };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  const selectImage = async () => {
    try {
      const granted = await requestPermission();
      if (granted) {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });
        if (!result.cancelled) onChangeImage(result.uri);
      } else alert("Sorry, you need to access to the image");
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100 }}
          />
        ) : (
          // <Icon
          //   name="camera"
          //   size={100}
          //   iconColor={colors.medium}
          //   backgroundColor={colors.grey}
          //   style={{ borderRadius: 10 }}
          // />
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.light,
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
    width: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default ImageInput;

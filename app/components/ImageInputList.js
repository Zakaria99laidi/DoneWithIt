import React, { useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
  const scrollView = useRef();
  return (
    <View style={styles.container}>
      <FlatList
        ref={scrollView}
        data={imageUris}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ImageInput
            imageUri={item}
            onChangeImage={() => onRemoveImage(item)}
          />
        )}
        ListFooterComponent={
          <ImageInput onChangeImage={(imageUri) => onAddImage(imageUri)} />
        }
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        style={{ alignSelf: "flex-start" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#eee",
  },
});

export default ImageInputList;

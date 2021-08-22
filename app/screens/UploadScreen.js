import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible} style={styles.container}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar progress={progress} color={colors.primary} width={200} />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            autoSize
            resizeMode="cover"
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;

import React from "react";
import { KeyboardAvoidingView } from "react-native";

function KeyboardAvoiding({ behavior = "position", children, ...otherProps }) {
  return (
    <KeyboardAvoidingView behavior={behavior} {...otherProps}>
      {children}
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoiding;

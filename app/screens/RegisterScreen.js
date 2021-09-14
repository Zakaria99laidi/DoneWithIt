import React, { useState } from "react";
import { Image, Keyboard, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppErrorMessage,
  AppForm,
  FormField,
  SubmitButton,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";
import authApi from "../api/auth";
import logger from "../utility/logger";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import KeyboardAvoiding from "./KeyboardAvoiding";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(20).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();

    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        logger.log(result);
      }
      return;
    }

    setError(null);
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.screen}>
        <KeyboardAvoiding>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <AppErrorMessage error={error} visible={error} />
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              placeholder="Name"
              name="name"
              textContentType="username"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              name="email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              name="password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="register" />
          </AppForm>
        </KeyboardAvoiding>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
export default RegisterScreen;

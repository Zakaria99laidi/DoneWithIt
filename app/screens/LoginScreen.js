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
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import Screen from "../components/Screen";
import KeyboardAvoiding from "./KeyboardAvoiding";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { logIn } = useAuth();
  const loginApi = useApi(authApi.login);

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();

    const result = await loginApi.request(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.screen}>
        <KeyboardAvoiding>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <AppErrorMessage
            error="Invalid email and/or password ."
            visible={loginFailed}
          />
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
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
            <SubmitButton title="login" />
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

export default LoginScreen;

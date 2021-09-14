import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";

import { AppForm, FormField, SubmitButton } from "./forms";
import ActivityIndicator from "./ActivityIndicator";
import messagesApi from "../api/messages";
import useApi from "../hooks/useApi";

function ContactSellerForm({ listing }) {
  const sendMessageApi = useApi(messagesApi.send);

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await sendMessageApi.request(message, listing.id);

    if (!result.ok) {
      return alert("Could not sent the message.");
    }

    resetForm();
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "Awesome!",
    //     body: "Your message was sent to the seller.",
    //   },
    //   trigger: null,
    // });
  };
  return (
    <>
      <ActivityIndicator visible={sendMessageApi.loading} />
      <View style={styles.form}>
        <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
          <FormField
            name="message"
            placeholder="Message..."
            multiline
            numberOfLines={2}
            textAlignVertical="top"
          />
          <SubmitButton title="contact seller" />
        </AppForm>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
    marginBottom: 10,
  },
});

export default ContactSellerForm;

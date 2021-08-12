import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, FormField, SubmitButton } from "../components/forms";
import FormPicker from "../components/forms/FormPicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});
const items = [
  { id: 1, label: "Fournitue" },
  { id: 2, label: "Clothing" },
  { id: 3, label: "Cameras" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: null,
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} placeholder="Title" name="title" />
        <FormField
          maxLength={8}
          placeholder="Price"
          name="price"
          keyboardType="numeric"
        />
        <FormPicker items={items} placeholder="Category" name="category" />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Some description here !"
          name="description"
          textAlignVertical="top"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});

export default ListingEditScreen;

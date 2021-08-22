import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  FormImagePicker,
  FormField,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});
const items = [
  {
    id: 1,
    label: "Furniture",
    icon: { name: "floor-lamp", backgroundColor: "#fc5c65" },
  },
  {
    id: 2,
    label: "Cars",
    icon: { name: "car", backgroundColor: "#fd9644" },
  },
  {
    id: 3,
    label: "Cameras",
    icon: { name: "camera", backgroundColor: "#fed330" },
  },
  {
    id: 4,
    label: "Games",
    icon: { name: "cards", backgroundColor: "#26de81" },
  },
  {
    id: 5,
    label: "Clothing",
    icon: { name: "shoe-heel", backgroundColor: "#2bcbba" },
  },
  {
    id: 6,
    label: "Sports",
    icon: { name: "basketball", backgroundColor: "#45aaf2" },
  },
  {
    id: 7,
    label: "Movies & Music",
    icon: { name: "headphones", backgroundColor: "#fc5c65" },
  },
  {
    id: 8,
    label: "Books",
    icon: { name: "book-open-variant", backgroundColor: "#a55eea" },
  },
  {
    id: 9,
    label: "Other",
    icon: { name: "application", backgroundColor: "#778ca3" },
  },
];

function ListingEditScreen() {
  const location = useLocation();
  const [visibleUpload, setVisibleUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setVisibleUpload(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setVisibleUpload(false);
      return alert("Could not save the listing.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setVisibleUpload(false)}
        progress={progress}
        visible={visibleUpload}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} placeholder="Title" name="title" />
        <FormField
          maxLength={8}
          placeholder="Price"
          name="price"
          keyboardType="numeric"
          width="32%"
        />
        <FormPicker
          items={items}
          name="category"
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
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
    paddingTop: 40,
  },
});

export default ListingEditScreen;

import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => uri !== imageUri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
      <AppErrorMessage />
    </>
  );
}

export default FormImagePicker;

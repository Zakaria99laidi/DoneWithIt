import { useFormikContext } from "formik";
import React from "react";

import Picker from "../AppPicker";
import ErrorMessage from "./AppErrorMessage";

function FormPicker({ items, placeholder, name }) {
  const { errors, values, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        placeholder={placeholder}
        placeholderColor="medium"
        selectedItem={values[name]}
        onSelectedItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;

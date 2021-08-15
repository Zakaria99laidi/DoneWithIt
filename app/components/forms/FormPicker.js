import { useFormikContext } from "formik";
import React from "react";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({
  items,
  PickerItemComponent,
  placeholder,
  placeholderColor = "medium",
  name,
  numColumns,
  ...otherProps
}) {
  const { errors, values, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        selectedItem={values[name]}
        numColumns={numColumns}
        onSelectedItem={(item) => setFieldValue(name, item)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;

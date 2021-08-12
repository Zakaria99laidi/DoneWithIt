import { useFormikContext } from "formik";
import React from "react";

import Button from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

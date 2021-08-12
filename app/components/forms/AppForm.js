import React from "react";
import { Formik } from "formik";

function AppForm({ children, ...otherProps }) {
  return <Formik {...otherProps}>{() => <>{children}</>}</Formik>;
}

export default AppForm;

import React from "react";
import InputFld from "./Input";
// import Select from "./Select";
// import Textarea from "./Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputFld {...rest} />;
    case "textarea":
      return "";
    case "select":
      return "";
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;

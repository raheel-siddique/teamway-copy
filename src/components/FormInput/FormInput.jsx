import React from "react";
import { FormInputStyle } from "./FormInput.Style";

function FormInput(props) {
  const { title, children, className, ...otherInputProps } = props;
  return (
    <FormInputStyle className={className}>
      <label className="input-title">{title}</label>
      {children ? (
        <article className="form-content">{children}</article>
      ) : (
        <input className="custom-input" {...otherInputProps} />
      )}
    </FormInputStyle>
  );
}

export default FormInput;

import React from "react";
import { Field, ErrorMessage } from "formik";
import { Form, Input } from "antd";

function InputFld(props) {
  const { disabled, label, name, formik, ...rest } = props;
  return (
    <>
     <Form.Item>
    <Field as={Input} id={name} name={name} {...rest} disabled={disabled}  />
    </Form.Item>
      <div style={{color:'red', position:"relative", bottom:25, fontSize:12, fontFamily:'sans-serif'}}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default InputFld;

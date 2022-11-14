import React from "react";
// import { Field, ErrorMessage } from "formik";
import { Form, Input } from "antd";

function InputFld(props) {
  const { disabled, label, name, formik, type, ...rest } = props;
  return (
    <>
      {type !== "password" ? (
        <Form.Item name={name} rules={[
          {required:true,
            message:`please enter your ${name}`,
            
            
          },
          {type:name==='email'? 'email':"", message:'please enter a valid email' },
          {min:name==='otp'? 6:"", message:'must be atleast 6 chacters'},
          {max:name==='otp'? 6:"", message:'cant go more than 6 chacters'}

        ]}
        
        hasFeedback
        >
          <Input id={name} name={name} {...rest} disabled={disabled} />
        </Form.Item>
      ) : (
        <Form.Item name={name} rules={[
          {required:true,
            message:`please enter your ${name}`
          },
          {min:6,message:'must be atleast 6 charachters'}

        ]}>
          <Input.Password id={name} name={name} {...rest} disabled={disabled} />
        </Form.Item>
      )}

      
    </>
  );
}

export default InputFld;

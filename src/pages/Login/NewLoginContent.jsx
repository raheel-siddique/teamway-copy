import React from "react";

import { Button, Col, Form } from "antd";
// import { Form, Formik } from "formik";
import FormikControl from "../../components/commoncomponent/common_dynamic/FormikControl";
// import * as Yup from "yup";

import LOGINFIELDDATA from "./loginfielddata";
import Header_Login_Form from "../../components/commoncomponent/Header_login_form";
import Footer_login_form from "../../components/commoncomponent/Footer_login_form";

const NewLoginContent = () => {


  const submitForm=(values)=>{
  console.log(values)
  }
  return (
    <>
      <Col
        span={12}
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
        className="login_Box_main"
      >
        <Col className="login_Box">
          <Header_Login_Form heading="Login Your Account" description='Welcome to Teamway, please put your credentials here to start using this App
              ' />
          <div className="form">
        
                <Form onFinish={submitForm}>
                <>
                  {LOGINFIELDDATA.map((fields) => {
                    return (
                      <>
                        <FormikControl
                          control={fields.control}
                          type={fields.type}
                          name={fields.name}
                          // formik={formik}
                          placeholder={fields.placeholder}
                          style={{
                            backgroundColor: "whitesmoke",
                            boxShadow:
                              "0px 3px 3px rgba(0, 0, 0, 0.25)",
                            
                          } }
                          
                        />
                      </>
                    );
                  })}

                  <p className="para_forget_password">forget password?</p>
             <Form.Item>
             <Button className="btn_login" block htmlType="submit">
                    Login
                  </Button>
             </Form.Item>
                 
                </>
                </Form>
           
          </div>
          <br />
        <Footer_login_form />
        </Col>
      </Col>
    </>
  );
};

export default NewLoginContent;

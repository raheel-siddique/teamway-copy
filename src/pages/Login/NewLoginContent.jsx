import React from "react";

import { Button, Col } from "antd";
import { Formik } from "formik";
import FormikControl from "../../components/commoncomponent/common_dynamic/FormikControl";
import * as Yup from "yup";

import LOGINFIELDDATA from "./loginfielddata";
import Header_Login_Form from "../../components/commoncomponent/Header_login_form";
import Footer_login_form from "../../components/commoncomponent/Footer_login_form";

const NewLoginContent = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),

    password: Yup.string().required("password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
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
          <Header_Login_Form />
          <div className="form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <>
                  {LOGINFIELDDATA.map((fields) => {
                    return (
                      <>
                        <FormikControl
                          control={fields.control}
                          type={fields.type}
                          name={fields.name}
                          formik={formik}
                          placeholder={fields.placeholder}
                        />
                      </>
                    );
                  })}

                  <p className="para_forget_password">forget password?</p>

                  <Button className="btn_login" block htmlType="submit">
                    Login
                  </Button>
                </>
              )}
            </Formik>
          </div>
          <br />
        <Footer_login_form />
        </Col>
      </Col>
    </>
  );
};

export default NewLoginContent;

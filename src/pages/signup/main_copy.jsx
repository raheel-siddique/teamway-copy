import { LoginOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Image, Row } from "antd";
import { Formik } from "formik";
import FormikControl from "../../components/commoncomponent/common_dynamic/FormikControl";
import Header_Login_Form from "../../components/commoncomponent/Header_login_form";
import "./Signup.css";
import {
  SIGNUPFIELDDATACOMPANYINFO,
  SIGNUPFIELDDATAPERSONAL,
} from "./signupfielddata";

const Signup = () => {
  return (
    <>
      <div className="main_container">
        <Col className="main_signup_div">
          <Row>
            <Col span={12} lg={12} xxl={12}>
              <div className="btn_box">
                <Button type="primary" href="/login" icon={<LoginOutlined />}>
                  Back To Login
                </Button>
              </div>
              <br />
              <div className="header_content">
                <Header_Login_Form />
              </div>
            </Col>

            <Col span={12} lg={12} xxl={12}>
              <div
                className="avatar_img"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  className="img_avatar"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
            </Col>
          </Row>
     
          <Row>
            <Formik>
                {(formik)=>(
                    <>
                    <Col
              span={12}
              lg={12}
              xxl={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="main_heaidng">
                <h3 className="head_first_col">Personal Information</h3>
              </div>
              
                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATAPERSONAL.slice(0, 2).map((namesField) => {
                        return (
                          <>
                            <div
                              className="first_name_fld"
                              style={{ width: 132 }}
                            >
                              <FormikControl
                                control={namesField.control}
                                type={namesField.type}
                                name={namesField.name}
                                formik={formik}
                                placeholder={namesField.placeholder}
                                style={{
                                  backgroundColor: "#E8E8E8",
                                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                }}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                    {SIGNUPFIELDDATAPERSONAL.slice(2, 8).map((fields) => {
                      return (
                        <>
                          <div className="" style={{ width: 272 }}>
                            <FormikControl
                              control={fields.control}
                              type={fields.type}
                              name={fields.name}
                              formik={formik}
                              placeholder={fields.placeholder}
                              style={{
                                backgroundColor: "#E8E8E8",
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                              }}
                            />
                          </div>
                        </>
                      );
                    })}

                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATAPERSONAL.slice(8, 10).map(
                        (namesField) => {
                          return (
                            <>
                              <div
                                className="first_name_fld"
                                style={{ width: 132 }}
                              >
                                <FormikControl
                                  control={namesField.control}
                                  type={namesField.type}
                                  name={namesField.name}
                                  formik={formik}
                                  placeholder={namesField.placeholder}
                                  style={{
                                    backgroundColor: "#E8E8E8",
                                    boxShadow:
                                      "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                  }}
                                />
                              </div>
                            </>
                          );
                        }
                      )}
                    </div>

                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATAPERSONAL.slice(10).map((namesField) => {
                        return (
                          <>
                            <div
                              className="first_name_fld"
                              style={{ width: 132 }}
                            >
                              <FormikControl
                                control={namesField.control}
                                type={namesField.type}
                                name={namesField.name}
                                formik={formik}
                                placeholder={namesField.placeholder}
                                style={{
                                  backgroundColor: "#E8E8E8",
                                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                }}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
           
            </Col>
            <Col span={12} lg={12} xxl={12}>
              <div className="main_heaidng">
                <h3 className="head_first_col">Company Information</h3>
              </div>
         
                  
                    {SIGNUPFIELDDATACOMPANYINFO.slice(0, 3).map((fields) => {
                      return (
                        <>
                          <div className="" style={{ width: 272 }}>
                            <FormikControl
                              control={fields.control}
                              type={fields.type}
                              name={fields.name}
                              formik={formik}
                              placeholder={fields.placeholder}
                              style={{
                                backgroundColor: "#E8E8E8",
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                              }}
                            />
                          </div>
                        </>
                      );
                    })}

                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATACOMPANYINFO.slice(3, 5).map(
                        (namesField) => {
                          return (
                            <>
                              <div
                                className="first_name_fld"
                                style={{ width: 132 }}
                              >
                                <FormikControl
                                  control={namesField.control}
                                  type={namesField.type}
                                  name={namesField.name}
                                  formik={formik}
                                  placeholder={namesField.placeholder}
                                  style={{
                                    backgroundColor: "#E8E8E8",
                                    boxShadow:
                                      "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                  }}
                                />
                              </div>
                            </>
                          );
                        }
                      )}
                    </div>

                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATACOMPANYINFO.slice(5, 7).map(
                        (namesField) => {
                          return (
                            <>
                              <div
                                className="first_name_fld"
                                style={{ width: 132 }}
                              >
                                <FormikControl
                                  control={namesField.control}
                                  type={namesField.type}
                                  name={namesField.name}
                                  formik={formik}
                                  placeholder={namesField.placeholder}
                                  style={{
                                    backgroundColor: "#E8E8E8",
                                    boxShadow:
                                      "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                  }}
                                />
                              </div>
                            </>
                          );
                        }
                      )}
                    </div>

                    <div
                      className="man_container_Names_fld"
                      style={{ display: "flex", columnGap: 10 }}
                    >
                      {SIGNUPFIELDDATACOMPANYINFO.slice(7, 9).map(
                        (namesField) => {
                          return (
                            <>
                              <div
                                className="first_name_fld"
                                style={{ width: 132 }}
                              >
                                <FormikControl
                                  control={namesField.control}
                                  type={namesField.type}
                                  name={namesField.name}
                                  formik={formik}
                                  placeholder={namesField.placeholder}
                                  style={{
                                    backgroundColor: "#E8E8E8",
                                    boxShadow:
                                      "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                  }}
                                />
                              </div>
                            </>
                          );
                        }
                      )}
                    </div>

                    {SIGNUPFIELDDATACOMPANYINFO.slice(10).map((fields) => {
                      return (
                        <>
                          <div className="" style={{ width: 272 }}>
                            <FormikControl
                              control={fields.control}
                              type={fields.type}
                              name={fields.name}
                              formik={formik}
                              placeholder={fields.placeholder}
                              style={{
                                backgroundColor: "#E8E8E8",
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                              }}
                            />
                          </div>
                        </>
                      );
                    })}
                    <Button
                      style={{
                        width: 273,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                      className="btn_login"
                      block
                      htmlType="submit"
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontWeight: 700,
                        }}
                      >
                        Proceed To Confirmation
                      </span>{" "}
                    </Button>
                 
            </Col>
                    </>
                )}
            </Formik>
            
          </Row>
        </Col>
      </div>
    </>
  );
};
export default Signup;

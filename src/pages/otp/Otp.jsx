import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row } from "antd";
import React from "react";
import FormikControl from "../../components/commoncomponent/common_dynamic/FormikControl";
import Header_Login_Form from "../../components/commoncomponent/Header_login_form";
import "./otp.css";
import Signup from "../signup/Signup";

const Otp = () => {
  return (
    <>
      <div className="main_container">
        <Row>
          <Col span={12} className="center_div">
            <Col span={10} className="main_center_div">
                <Form>

                
              <div className="btn_box">
                <Button type="primary" href="/login" icon={<LoginOutlined />}>
                  Back To Signup
                </Button>
              </div>
              <br />
              <div className="header_content">
                <Header_Login_Form
                  heading="Confirmation"
                  description="We have sent you confirmation code on your email/mobile number.please confirm"
                />
              </div>
              <div className="head_confirm">
                <h5>Confirmation</h5>
              </div>
              <br />
              <div className="fiedl">
                <FormikControl
                  control='input'
                  type='text'
                  name='otp'
                  placeholder='confirmation code'
                  style={{
                    backgroundColor: "whitesmoke",
                    boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </div>
              <div className="btn_otp">
              <Form.Item>
             <Button className="btn_login" block htmlType="submit">
                    confirm
                  </Button>
             </Form.Item>
              </div>
              </Form>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Otp;

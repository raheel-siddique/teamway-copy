import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import "./Login.css";

const NewLogin = () => {
  return (
    <>
      <div className="main_container">
        <Row>
          <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12} className="left_column">
            <div className="main_heading_banner">
              <h1 className="heading_banner">Teamway Productivity</h1>
            </div>

            <div className="sec_heading_banner">
              <h2 className="sec_heading">
                Let us organize your work so you can concentrate on whats
                important
              </h2>
            </div>
            <div className="description_banner">
              <p className="para_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                optio eos sapiente architecto error cum eligendi, similique,
                Omnis optio eos sapiente architecto error cum eligendi,
                similique
              </p>
            </div>
            <div className="icons_banner">
              <InstagramOutlined className="intsgram_icon" />
              <TwitterOutlined className="intsgram_icon" />
              <FacebookOutlined className="intsgram_icon" />
            </div>
            <div className="link_banner">
              <a className="link_webiste" href="/">
                www.shoponline.com
              </a>
            </div>
          </Col>
          <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12} className="login_Box_main">
            <Col className="login_Box">
              <div className="main_div_form_heading">
                <h1 className="form_head">Login Your Account</h1>
              </div>

              <div className="main_div_form_para">
                <p className="form_para">
                  Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet
                  consecte Lorem 
                </p>
              </div>

              <div className="form">
                <Form>
                  <Form.Item name="email">
                    <Input placeholder="email" className="input_email" />
                  </Form.Item>

                  <Form.Item name="password">
                    <Input placeholder="password"  className="input_password" />
                    <p className="para_forget_password">forget password?</p>
                  </Form.Item>

                  <Form.Item>
                    <Button className="btn_login" block  htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="footer_box">
                <p className="text_footer">dont have an account?</p>
                <p className="text_footer_account">Create Account</p>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default NewLogin;

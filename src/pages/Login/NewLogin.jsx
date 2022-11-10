
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import LeftBannerForm from "../../components/commoncomponent/LeftBannerForm";
import "./Login.css";
import NewLoginContent from "./NewLoginContent";

const NewLogin = () => {
  return (
    <>
      <div className="main_container">
        <Row>
         <LeftBannerForm />
         <NewLoginContent />
        </Row>
      </div>
    </>
  );
};
export default NewLogin;

import React from "react";

import { PopupStyle } from "./Popup.style";

function Popup(props) {
  const {
    children,
    setIsModalVisible,
    isModalVisible,
    formTitle,
    footer,
    width,
  } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <PopupStyle
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title={formTitle}
      footer={footer}
      width={width}
      centered={true}
    >
      {children}
    </PopupStyle>
  );
}

export default Popup;

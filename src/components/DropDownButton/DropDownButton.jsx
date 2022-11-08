import React from "react";
import { MdMoreVert } from "react-icons/md";

import { DropDownButtonStyle } from "./DropDownButton.style";

function DropDownButton({ menu, className }) {
  return (
    <DropDownButtonStyle
      overlayClassName={className}
      overlay={menu}
      trigger={["click"]}
      placement="bottom"
    >
      <MdMoreVert />
    </DropDownButtonStyle>
  );
}

export default DropDownButton;

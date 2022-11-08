import React from "react";

import Loader from "../../assets/spinner.gif";
import { SpinnerStyle } from "./Spinner.style";

function Spinner({ className }) {
  return (
    <SpinnerStyle className={className}>
      <img src={Loader} alt="PreLoader" />
    </SpinnerStyle>
  );
}

export default Spinner;

import React from "react";

import FormInput from "../FormInput/FormInput";
import { FileUploaderStyle } from "./FileUploader.style";

function FileUploader(props) {
  const { guideText, icon, ...otherInputProps } = props;
  return (
    <FileUploaderStyle {...props}>
      <label htmlFor="attachment" className="attachment">
        <input type="file" id="attachment" {...otherInputProps} />

        <article className="attachemnt-details">
          <p className="guide-text">{guideText}</p>
          <span className="icon">{icon}</span>
        </article>
      </label>
    </FileUploaderStyle>
  );
}

export default FileUploader;

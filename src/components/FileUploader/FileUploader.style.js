import styled from "styled-components";
import { FlexboxStyle } from "../../styles/common";

import FormInput from "../FormInput/FormInput";

export const FileUploaderStyle = styled(FormInput)`
  .attachment {
    display: block;
    border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

    width: 100%;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;

    cursor: pointer;

    #attachment {
      display: none;
    }

    .attachemnt-details {
      ${FlexboxStyle({ justify: "space-between" })};

      .guide-text {
        font-size: 1.2rem;
      }

      .icon {
        ${FlexboxStyle};
      }
    }
  }
`;

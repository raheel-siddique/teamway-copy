import styled from "styled-components";
import { CommonGridStyle, FlexboxStyle } from "../../../styles/common";

export const CreateTaskStyle = styled.main`
  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  box-shadow: ${({ theme }) => theme.shadows.commonShadow};

  margin: 3rem 0 5rem;
  padding: 2rem;
  border-radius: 1.5rem;

  .form-title {
    ${FlexboxStyle({ justify: "flex-start" })};

    color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};

    .icon {
      ${FlexboxStyle};
      font-size: 2rem;
    }

    .title {
      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
`;

export const TaskFormStyle = styled.form`
  ${CommonGridStyle({ columns: "1fr 1fr" })}

  margin-top: 1.5rem;

  .assign-to-dropdown {
    .ant-select {
      width: 100%;

      &.ant-select-open,
      &.ant-select-focused {
        .ant-select-selector {
          border-color: unset;
          box-shadow: unset;
        }
      }

      .ant-select-selector {
        border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};
        height: 3.35rem;
        border-radius: 0.5rem;
      }
    }
  }

  .description {
    grid-column: 1/-1;

    textarea {
      border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      width: 100%;
      border-radius: 0.5rem;
      padding: 1rem;
      font-size: 1.2rem;

      outline: none;
    }
  }

  .calender-wrapper {
    .ant-picker {
      border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      width: 100%;
      border-radius: 0.5rem;
    }
  }

  .attachment-wrapper {
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
  }

  .form-buttons-wrapper {
    grid-column: 1/-1;
    margin-top: 2rem;

    .form-button {
      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      color: ${({ theme }) => theme.colors.WHITE_COLOR};

      width: 10rem;
      padding: 0.7rem 1rem;
      border-radius: 0.3rem;
      border: none;
      margin-right: 1rem;

      cursor: pointer;
    }
  }
`;

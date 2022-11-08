import styled from "styled-components";
import { CommonGridStyle, FlexboxStyle } from "../../../styles/common";

export const CreateProjectStyle = styled.main`
  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  box-shadow: ${({ theme }) => theme.shadows.commonShadow};

  padding: 2rem 1rem;
  border-radius: 1rem;
  margin-top: 3rem;

  .form-header {
    ${FlexboxStyle({ justify: "flex-start" })};

    .icon {
      ${FlexboxStyle};

      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};

      margin-right: 1rem;
      font-size: 2rem;
    }

    .title {
      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
    }
  }
`;

export const ProjectFormStyle = styled.form`
  ${CommonGridStyle({ columns: "1fr 1fr" })};

  margin-top: 1.5rem;

  .content-input {
    .form-content {
      .ant-select {
        width: 100%;

        &.ant-select-open,
        &.ant-select-focused {
          .ant-select-selector {
            border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

            box-shadow: unset;
          }
        }

        .ant-select-selector {
          border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

          border-radius: 0.5rem;
          height: 3.4rem;
        }
      }
    }
  }

  .form-description {
    grid-column: 1/-1;

    .custom-description {
      border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      width: 100%;
      border-radius: 0.5rem;
      outline: none;
      padding: 1rem;
    }
  }

  .form-date {
    .ant-picker {
      border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      border-radius: 0.5rem;
      width: 100%;
      padding: 0.5rem 1.1rem 0.5rem;
    }
  }

  .buttons-wrapper {
    grid-column: 1/-1;

    margin-top: 2rem;

    button {
      background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
      color: ${({ theme }) => theme.colors.WHITE_COLOR};

      border: none;
      margin-right: 1rem;
      width: 10rem;
      padding: 0.7rem;
      border-radius: 0.5rem;

      cursor: pointer;
    }
  }
`;

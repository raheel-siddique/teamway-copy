import styled from "styled-components";
import { CommonGridStyle, FlexboxStyle } from "../../../styles/common";

export const CreateTeamsStyle = styled.main`
  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  box-shadow: ${({ theme }) => theme.shadows.commonShadow};

  margin-top: 3rem;
  padding: 2rem;
  border-radius: 1rem;

  .section-header {
    ${FlexboxStyle({ justify: "flex-start" })};

    .icon {
      ${FlexboxStyle};

      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};

      margin-right: 1rem;
    }

    .title {
      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
    }
  }
`;

export const TeamsFormStyle = styled.form`
  ${CommonGridStyle({ columns: "1fr 1fr" })};

  .project-dropdown {
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

        border-radius: 0.5rem;
        height: 3.4rem;
      }
    }
  }

  .image-uplaod-wrapper {
    .image-uploader {
      ${FlexboxStyle({ justify: "Flex-end" })};

      border: 1px solid ${({ theme }) => theme.colors.GRAY_COLOR};
      width: 100%;
      padding: 0.7rem 1rem;
      border-radius: 0.5rem;

      cursor: pointer;

      #imageUpload {
        display: none;
      }

      .icon {
        ${FlexboxStyle};

        color: ${({ theme }) => theme.colors.GRAY_COLOR};

        font-size: 2rem;
      }
    }
  }

  .options-container {
    grid-column: 1/-1;

    .options-wrapper {
      list-style: none;

      .options-item {
        ${FlexboxStyle({ justify: "flex-start" })};

        padding: 1rem;

        .option-icon {
          ${FlexboxStyle};

          color: ${({ theme }) => theme.colors.GRAY_COLOR};

          margin-right: 1rem;
          font-size: 2rem;
        }

        .option-text {
          color: ${({ theme }) => theme.colors.GRAY_COLOR};

          font-weight: 600;
        }
      }
    }
  }

  .buttons-wrapper {
    grid-column: 1/-1;
    margin-top: 2rem;

    button {
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

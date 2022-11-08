import styled from "styled-components";
import {
  CommonGridStyle,
  FlexboxStyle,
  Positioning,
} from "../../styles/common";

export const DashboardStyle = styled.main``;

export const TaskTableStyle = styled.article`
  ${Positioning};

  box-shadow: ${({ theme }) => theme.shadows.commonShadow};
  background: ${({ theme }) => theme.colors.WHITE_COLOR};

  margin-top: 5rem;
  padding: 3rem;
  border-radius: 0.5rem;

  .table-header {
    ${Positioning({
      position: "absolute",
      top: "-3rem",
      left: "50%",
      transform: "translateX(-50%)",
    })};

    width: 95%;
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.WHITE_COLOR};

    padding: 2rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
`;

export const ChartsWrapperStyle = styled.article`
  ${CommonGridStyle({ columns: "1fr 1fr", gap: "2rem" })};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};

  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.commonShadow};

  canvas {
    width: 100% !important;
    height: 25rem !important;
  }
`;

export const EditFormStyle = styled.article`
  form {
    .form-date-input {
      ${CommonGridStyle({ columns: "1fr 1fr" })};

      .date-input {
        .form-content {
          .ant-picker {
            border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

            width: 100%;
            border-radius: 0.5rem;

            cursor: pointer;
          }
        }
      }
    }

    .description {
      textarea {
        border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

        width: 100%;
        border-radius: 0.5rem;
      }
    }

    .buttons-wrapper {
      margin-top: 1rem;

      button {
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};

        border: none;
        padding: 0.8rem;
        width: 10rem;
        margin-right: 1rem;
        border-radius: 0.2rem;

        cursor: pointer;
      }
    }
  }
`;

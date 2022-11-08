import styled from "styled-components";
import { CommonGridStyle, Positioning } from "../../../styles/common";

export const TaskListStyle = styled.main`
  ${Positioning};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  margin-top: 7rem;
  padding: 1.5rem;
  border-radius: 1.5rem;

  .section-header {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.WHITE_COLOR};

    padding: 2rem 1rem;
    border-radius: 0.5rem;
    width: 100%;
    margin: 0 auto;
    margin-top: -5rem;
    margin-bottom: 2rem;
  }

  .teams-list-table {
    margin-top: 4rem;

    thead {
      background: ${({ theme }) => theme.colors.CULTURED_WHITE_COLOR};

      tr {
        td {
          color: ${({ theme }) => theme.colors.GRAY_COLOR};

          padding: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const TaskEditFormStyle = styled.form`
  ${CommonGridStyle({ columns: "1fr 1fr" })};

  .assigned-to {
    .form-content {
      .ant-select {
        border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

        width: 100%;
        font-size: 1.2rem;
        border-radius: 0.5rem;

        .ant-select-selector {
          border: none;

          border-radius: 0.5rem;
        }
      }
    }
  }

  .description {
    grid-column: 1/-1;

    textarea {
      border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      width: 100%;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      padding: 0.5rem;

      outline: none;
    }
  }

  .select-date {
    .ant-picker {
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
`;

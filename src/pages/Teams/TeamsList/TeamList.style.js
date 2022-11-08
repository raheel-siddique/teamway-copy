import styled from "styled-components";
import { Positioning } from "../../../styles/common";

export const TeamListStyle = styled.section`
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

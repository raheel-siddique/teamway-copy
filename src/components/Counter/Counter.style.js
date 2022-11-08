import styled from "styled-components";
import { FlexboxStyle, Positioning } from "../../styles/common";

export const CounterStyle = styled.figure`
  ${Positioning};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  box-shadow: ${({ theme }) => theme.shadows.commonShadow};

  padding: 2rem;
  border-radius: 1.5rem;

  cursor: pointer;

  .icon {
    ${Positioning({ position: "absolute", top: "-1.6rem", left: "0.5rem" })};
    ${FlexboxStyle};

    background: ${(p) => p.color};
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 1rem;

    > svg {
      fill: ${({ theme }) => theme.colors.WHITE_COLOR};
      width: 2rem;
    }
  }

  .card-details {
    ${FlexboxStyle({ direction: "column", align: "flex-end" })};

    .heading {
      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
      font-weight: 300;
      font-size: 1.3rem;
    }

    .counter-no {
      color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};

      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`;

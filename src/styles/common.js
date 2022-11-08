import { css } from "styled-components";

export const FlexboxStyle = ({ justify, align, direction }) => css`
  display: flex;
  justify-content: ${justify || "center"};
  align-items: ${align || "center"};
  flex-direction: ${direction || "row"};
`;

export const CommonGridStyle = ({ columns, gap, align }) => css`
  display: grid;
  grid-template-columns: ${columns || "1fr 1fr 1fr"};
  grid-gap: ${gap || "1rem"};
  align-items: ${align || "flex-start"};
`;

export const CommonSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Positioning = ({
  position,
  top,
  right,
  bottom,
  left,
  transform,
}) => css`
  position: ${position || "relative"};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
  transform: ${transform};
`;

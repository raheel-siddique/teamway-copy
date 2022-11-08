import styled from "styled-components";
import { FlexboxStyle } from "../../styles/common";

export const SearchbarStyle = styled.article`
  ${FlexboxStyle({ justify: "flex-start" })};

  margin: 2rem 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};
  padding: 0.8rem;
  width: 40rem;
  border-radius: 0.5rem;

  .search-input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 1.2rem;
  }

  .search-icon {
    ${FlexboxStyle};

    background: none;
    border: none;
    cursor: pointer;
  }
`;

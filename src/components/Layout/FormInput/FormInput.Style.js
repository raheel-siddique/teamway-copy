import styled from "styled-components";

export const FormInputStyle = styled.article`
  .input-title {
    color: ${({ theme }) => theme.colors.DARK_COLOR};
    display: block;

    padding: 1rem 0;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .custom-input {
    border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

    padding: 0.7rem;
    width: 100%;
    font-size: 1.2rem;
    border-radius: 0.5rem;

    outline: none;
  }
`;

import styled from "styled-components";
import { FlexboxStyle } from "../../styles/common";

export const LoginStyle = styled.section`
  ${FlexboxStyle}

  background: ${({ theme }) => theme.gradients.primary};
  background-size: cover;
  width: 100%;
  height: 100vh;

  .login-container {
    max-width: 40rem;
    width: 100%;

    .site-logo {
      padding: 2rem 0;
      text-align: center;

      .logo {
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
      }
    }

    .login-form {
      background: ${({ theme }) => theme.colors.WHITE_COLOR};
      padding: 2rem;
      border-radius: 1rem;

      .error {
        color: ${({ theme }) => theme.colors.RED_COLOR};
        text-align: center;
      }

      .form-content {
        .form-title {
          display: block;
          margin: 1rem 0;
          font-size: 1.2rem;
        }

        .username {
          border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

          width: 100%;
          padding: 0.5rem;
          border-radius: 0.3rem;

          outline: none;
        }

        .ant-input-affix-wrapper {
          border: 0.1rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

          border-radius: 0.3rem;
        }
      }

      .login-button {
        ${FlexboxStyle};

        background: ${({ theme }) => theme.gradients.primary};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};

        width: 100%;
        margin-top: 1.5rem;
        padding: 0.8rem;
        border: none;
        border-radius: 0.5rem;

        cursor: pointer;

        .icon {
          ${FlexboxStyle};

          margin-left: 1rem;
        }
      }
    }
  }
`;

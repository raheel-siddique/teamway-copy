import styled from "styled-components";
import {
  CommonGridStyle,
  FlexboxStyle,
  Positioning,
} from "../../styles/common";

export const LayoutStyle = styled.section`
  .dashboard-content {
    padding-left: 29rem;
    padding-top: 11rem;
    padding-bottom: 3rem;
    padding-right: 24rem;
  }
`;

export const SidebarStyle = styled.aside`
  ${Positioning({ position: "fixed", top: "1rem", left: "1rem" })};
  ${FlexboxStyle({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })};

  background: ${({ theme }) => theme.gradients.dark};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};

  width: 25rem;
  height: 95vh;
  border-radius: 1.5rem;
  padding: 2rem;

  z-index: 2;

  .sidebar-container {
    width: 100%;

    .sidebar-top {
      padding: 1rem 0;
      border-bottom: 0.01rem solid ${({ theme }) => theme.colors.GRAY_COLOR};

      .site-logo {
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
        text-align: center;
      }
    }

    .sidebar-menu {
      color: ${({ theme }) => theme.colors.LIGHT_GRAY_COLOR};

      background: none;
      border: none;
      margin-top: 3rem;

      .ant-menu-item {
        &.ant-menu-item-selected {
          background: none;
          color: ${({ theme }) => theme.colors.WHITE_COLOR};

          &::after {
            border: none;
          }
        }

        &.ant-menu-item-active {
          color: ${({ theme }) => theme.colors.WHITE_COLOR};
        }

        .menu-item-link {
          ${FlexboxStyle({ justify: "flex-start" })};

          color: ${({ theme }) => theme.colors.LIGHT_GRAY_COLOR};
          transition: 0.3s all linear;

          &:hover {
            color: ${({ theme }) => theme.colors.WHITE_COLOR};
          }

          &.active {
            color: ${({ theme }) => theme.colors.WHITE_COLOR};
          }

          .icon {
            ${FlexboxStyle};

            font-size: 1.8rem;
            margin-right: 1rem;
          }

          .text {
            font-size: 1.5rem;
          }
        }
      }

      .ant-menu-submenu {
        &:hover {
          color: ${({ theme }) => theme.colors.WHITE_COLOR};

          .ant-menu-submenu-title {
            .ant-menu-submenu-arrow {
              color: ${({ theme }) => theme.colors.WHITE_COLOR};
            }
          }
        }

        &.ant-menu-submenu-active,
        &.ant-menu-submenu-open {
          .ant-menu-submenu-title {
            color: ${({ theme }) => theme.colors.WHITE_COLOR};

            &:hover {
              color: ${({ theme }) => theme.colors.WHITE_COLOR};
            }

            &:active {
              background: none;
            }
          }

          .ant-menu-submenu-title {
            .ant-menu-submenu-arrow {
              color: ${({ theme }) => theme.colors.WHITE_COLOR};
            }
          }
        }

        &.ant-menu-submenu-selected {
          color: ${({ theme }) => theme.colors.WHITE_COLOR};

          .ant-menu-submenu-title {
            .ant-menu-title-content {
              article {
                ${FlexboxStyle({ justify: "flex-start" })};

                .icon {
                  ${FlexboxStyle};

                  margin-right: 1rem;
                  font-size: 2rem;
                }
              }
            }

            .ant-menu-submenu-arrow {
              color: ${({ theme }) => theme.colors.WHITE_COLOR};

              &:hover {
                color: ${({ theme }) => theme.colors.WHITE_COLOR};
              }
            }
          }
        }

        .ant-menu-submenu-title {
          .ant-menu-title-content {
            article {
              ${FlexboxStyle({ justify: "flex-start" })};

              .icon {
                ${FlexboxStyle};

                font-size: 1.8rem;
                margin-right: 1rem;
              }
            }
          }

          .ant-menu-submenu-arrow {
            color: ${({ theme }) => theme.colors.LIGHT_GRAY_COLOR};
          }
        }

        .ant-menu {
          background: none;

          .ant-menu-item {
            color: ${({ theme }) => theme.colors.LIGHT_GRAY_COLOR};

            &.ant-menu-item-selected {
              background: none;
              color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

              &::after {
                border: none;
              }
            }

            &.ant-menu-item-active {
              color: ${({ theme }) => theme.colors.WHITE_COLOR};
            }

            &:active {
              background: none;

              &::after {
                border: none;
              }
            }

            .submenu-item-link {
              color: ${({ theme }) => theme.colors.LIGHT_GRAY_COLOR};

              transition: 0.3s all linear;

              &.active {
                color: ${({ theme }) => theme.colors.WHITE_COLOR};
              }
            }
          }
        }
      }
    }
  }

  .logout-button {
    ${FlexboxStyle};

    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.WHITE_COLOR};

    width: 100%;
    border: none;
    padding: 1.2rem;

    border-radius: 0.5rem;
    cursor: pointer;

    .icon {
      ${FlexboxStyle};

      margin-right: 1rem;
    }
  }
`;

export const CalenderSiderBarStyle = styled.aside`
  ${Positioning({ position: "absolute", right: "3.5rem", top: "11rem" })};

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  width: 19rem;
  height: 82vh;
  padding: 1rem;
  border-radius: 1.5rem;

  .heading {
    color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
  }

  .calender-wrapper {
    .ant-picker-calendar {
      .ant-picker-calendar-header {
        ${CommonGridStyle({ columns: "1fr 1fr" })};

        .ant-radio-group {
          display: none;
        }
      }

      .ant-picker-content {
        table-layout: unset;
      }
    }
  }
`;

export const NavbarStyle = styled.nav`
  ${Positioning({ position: "fixed", top: "1rem", left: "29rem" })};
  ${FlexboxStyle({ justify: "space-between" })};

  background: rgba(255, 255, 255, 0.8);
  width: 75%;
  padding: 1rem 2rem;
  border-radius: 1.5rem;

  z-index: 2;

  .page-title {
    color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};

    font-size: 1.5rem;
    font-weight: 600;
  }

  .action-button {
    ${FlexboxStyle({ justify: "flex-start", align: "flex-start" })};

    .profile-image-wrapper {
      display: block;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;

      .avatar {
        max-width: 100%;
      }
    }

    .profile-detail {
      margin-left: 1rem;

      .name {
        color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
      }

      .email {
        color: ${({ theme }) => theme.colors.DULL_BLUE_COLOR};
        font-size: 1rem;
      }
    }
  }
`;

export const CountersStyle = styled.article`
  ${CommonGridStyle({ columns: "repeat(5, 1fr)" })};
`;

const THEME = {
  colors: {
    PRIMARY_COLOR: "#49a3f1",
    DARK_COLOR: "#42424a",
    GREEN_COLOR: "#66BB6A",
    PINK_COLOR: "#EC407A",
    WHITE_COLOR: "#FFF",
    RHYTHM_COLOR: "#7b809a",
    DULL_BLUE_COLOR: "#344767",
    CULTURED_WHITE_COLOR: "#F0F2F5",
    GRAY_COLOR: "#5d5d61",
    LIGHT_GRAY_COLOR: "#858b8e",
    RED_COLOR: "#d22222",
  },

  gradients: {
    primary: "linear-gradient(to top, #1a73e8 0%,#49a3f1 100%);",
    dark: "linear-gradient(to bottom, #42424a 0%,#191919 100%);",
    success: "linear-gradient(to bottom, #66bb6a 0%,#43a047 100%);",
    funky: "linear-gradient(to bottom, #ec407a 0%,#d81b60 100%);",
    redish: "linear-gradient(to bottom, #f4564a 0%,#ce4040 100%)",
  },

  breakpoints: {
    smallDevices: "425px",
    mobile: "600px",
    mediumDevices: "768px",
    tablets: "992px",
    largeScreens: "1024px",
    desktop: "1200px",
  },

  shadows: {
    commonShadow: "0px 4px 5px -3px rgba(0,0,0,0.43);",
  },
};

export default THEME;

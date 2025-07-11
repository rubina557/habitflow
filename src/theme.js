import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e6f6f5",
    100: "#ccece9",
    200: "#b3e2dd",
    300: "#99d8d1",
    400: "#80cec5",
    500: "#66c4b9",
    600: "#529d94",
    700: "#3d766f",
    800: "#294f4a",
    900: "#142725",
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({
  colors,
  fonts,
});

export default theme;

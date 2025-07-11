import { extendTheme } from '@chakra-ui/react';

// 1. Define custom colors for your brand
const colors = {
  brand: {
    50: '#e6f6f5',
    100: '#ccece9',
    200: '#b3e2dd',
    300: '#99d8d1',
    400: '#80cec5',
    500: '#66c4b9', // Your main brand color
    600: '#529d94', // A darker shade for hover/active states
    700: '#3d766f',
    800: '#294f4a',
    900: '#142725',
  },
};

// 2. Define custom fonts (optional, but good for branding)
const fonts = {
  heading: `'Poppins', sans-serif`, // A nice, modern heading font
  body: `'Inter', sans-serif`,     // A clean, readable body font
};

// 3. Combine your customizations into a theme object
const theme = extendTheme({
  colors,
  fonts,
  // You can also override component styles here
  // For example, to make all buttons use your brand color by default:
  /*
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      defaultProps: {
        colorScheme: 'brand', // This sets the default color scheme
      },
    },
  },
  */
});

export default theme;
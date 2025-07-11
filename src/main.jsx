import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HabitProvider } from "./context/HabitContext.jsx";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <HabitProvider>
          <App />
        </HabitProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

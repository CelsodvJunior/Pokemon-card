import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "../src/utils/theme.js";
import GlobalStyle from "./globalStyle/GlobalStyle.jsx";
import Home from "./pages/Home.jsx/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global-styles.css";

import AppRouters from "./router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouters />
  </StrictMode>
);

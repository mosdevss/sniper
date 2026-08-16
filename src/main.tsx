// src/main.tsx
//
// Importing the stylesheet here (rather than per-component) makes it
// global and unscoped, so every component in the tree gets it. This is
// the only place styles.scss is imported from.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

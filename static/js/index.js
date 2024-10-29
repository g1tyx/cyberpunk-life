import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { GameData } from "./scripts/GameContext.js";

import App from "./scripts/App.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GameData>

      <App />

    </GameData>
  </StrictMode>
);
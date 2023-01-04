import React from "react";
import { createRoot } from "react-dom/client";

(() => {
  const container = document.getElementById("app");

  if (!container) {
    throw new Error("Element not found!");
  }

  const root = createRoot(container!);
  root.render(<div>React Project</div>);
})();

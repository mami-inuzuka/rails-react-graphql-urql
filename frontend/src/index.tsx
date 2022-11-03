import React from "react";
import ReactDOM from "react-dom/client";
import { createClient } from "urql";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const client = createClient({
  url: "http://localhost:3000/graphql",
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

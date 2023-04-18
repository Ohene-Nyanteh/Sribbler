import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeContextProvider } from "./Utils";
import "./styles.css";
import FirstLaunchContextProvider from "./Utils/Contexts/FirstLaunchContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
      <FirstLaunchContextProvider>
        <App />
      </FirstLaunchContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import emailjs from "@emailjs/browser";

import App from "./App.jsx";
import { SITE } from "./data/siteConfig.js";
import "./styles/style.css";

emailjs.init({ publicKey: SITE.emailjs.publicKey });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

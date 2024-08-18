import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ForgotPassword from "./pages/ForgotPasswordPage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);

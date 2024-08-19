import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { HomePage } from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgotPassword from "./pages/ForgotPasswordPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);

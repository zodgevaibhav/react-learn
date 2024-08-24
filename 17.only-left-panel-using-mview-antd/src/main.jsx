import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import {ContactPage}from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);

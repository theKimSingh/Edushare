import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Contact from "./pages/contact_us";
import Donate from "./pages/donate_resources";
import Find from "./pages/find_resources";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/edushare" element={<Navigate replace to="/edushare/home" />} />
        <Route path="/edushare/home" element={<App />} />
        <Route path="/edushare/contact-us" element={<Contact />} />
        <Route path="/edushare/donate-resources" element={<Donate />} />
        <Route path="/edushare/find-resources" element={<Find />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

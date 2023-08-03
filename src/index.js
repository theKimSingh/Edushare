import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact_us";
import Donate from "./pages/donate_resources";
import Find from "./pages/find_resources";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
    <Routes>
      <Route exact path="/" component={<App />} />
      <Route path="/contact-us" component={<Contact />} />
      <Route path="/donate-resources" component={<Donate />} />
      <Route path="/find-resources" component={<Find />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

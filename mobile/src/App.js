import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import HomePage from "./components/home/homePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

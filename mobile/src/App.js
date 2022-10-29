import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import HomePage from "./components/home/homePage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

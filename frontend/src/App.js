import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import LandingScreen from "./components/LandingScreen";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<LandingScreen />} />
        </Routes>
      </Router>
  );
}

export default App;

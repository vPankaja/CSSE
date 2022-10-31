import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import LandingScreen from "./components/LandingScreen";
import PlanTimeTable from "./components/manager/PlanTimeTable";
import ManagerLogin from "./components/manager/ManagerLogin";
import ManagerHome from "./components/manager/ManagerHome";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<LandingScreen />} />
          <Route path="/plantimetable" element={<PlanTimeTable />} />
          <Route path="/managerlogin" element={<ManagerLogin />} />
          <Route path="/managerhome" element={<ManagerHome />} />
        </Routes>
      </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import LandingScreen from "./components/LandingScreen";
import PlanTimeTable from "./components/manager/PlanTimeTable";
import Login from "./components/Login";
import ManagerHome from "./components/manager/ManagerHome";
import CustomerHome from "./components/customer/CustomerHome";
import ReloadAccount from "./components/customer/ReloadAccount";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<LandingScreen />} />
          <Route path="/plantimetable" element={<PlanTimeTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/managerhome" element={<ManagerHome />} />
          <Route path="/customerhome" element={<CustomerHome />} />
          <Route path="/reloadaccount" element={<ReloadAccount />} />
        </Routes>
      </Router>
  );
}

export default App;

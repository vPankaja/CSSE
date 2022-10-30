import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import HomePage from "./components/home/homePage";
import Reload from "./components/reload/reload";
import AdminHome from "./components/admin-home/adminHome";
import PlanTimetable from "./components/planTimetable/planTimetable";
import GetTimetableList from "./components/getTimetables/getTimetableList";
import Checkout from "./components/reload/checkout";
import VehicleList from "./components/vehicleManagemnt/vehicleList";
import AddVehicle from "./components/vehicleManagemnt/addVehicle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reload" element={<Reload />} />
        <Route path="/planTimetable" element={<PlanTimetable />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/gettimetableList" element={<GetTimetableList />} />
        <Route path="/checkout/:amount" element={<Checkout />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
      </Routes>
    </Router>
  );
}

export default App;

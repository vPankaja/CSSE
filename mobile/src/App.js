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
import StartJourney from "./components/journey/startJourney";
import LoginPage from "./components/LoginPage";
import ShowBalance from "./components/Balance/showBalance";
import ReloadSuccess from "./components/reload/reloadSuccess";
import RoutesList from "./components/routesManagement/routesList";
import CreateRoute from "./components/routesManagement/createRoute";
import GenerateQr from "./generateQR/generateQr";
import Register from "./components/register";
import DriverTimetables from "./components/driverTimetables/driverTimetables";
import EndJourney from "./components/journey/endJourney";

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
        <Route path="/startJourney" element={<StartJourney />} />
        <Route path="/endJourney" element={<EndJourney />} />
        <Route path="/balance" element={<ShowBalance />} />
        <Route path="/successReload" element={<ReloadSuccess />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/routesList" element={<RoutesList />} />
        <Route path="/createRoute" element={<CreateRoute />} />
        <Route path="/generateQr/:id" element={<GenerateQr />} />
        <Route path="/register" element={<Register />} />
        <Route path="/driverTimetables" element={<DriverTimetables />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

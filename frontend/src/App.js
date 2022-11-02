import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";
import LandingScreen from "./components/LandingScreen";
import PlanTimeTable from "./components/manager/PlanTimeTable";
import Login from "./components/Login";
import ManagerHome from "./components/manager/ManagerHome";
import CustomerHome from "./components/customer/CustomerHome";
import ReloadAccount from "./components/customer/ReloadAccount";
import AddVehicle from "./components/manager/AddVehicle";
import VehicleList from "./components/manager/VehicleList";
import ManageTimeTables from "./components/manager/ManageTimeTable";
import AddRoutes from "./components/manager/AddRoutes";
import RouteList from "./components/manager/RouteList";
import UpdateVehicle from "./components/manager/UpdateVehicle"
import UpdateRoute from "./components/manager/UpdateRoute";

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
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/vehiclelist" element={<VehicleList />} />
          <Route path="/managetimetables" element={<ManageTimeTables />} />
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/routelist" element={<RouteList />} />
          <Route path="/updateVehicle/:id" element={<UpdateVehicle/>} />
          <Route path="/updateRoute/:id" element={<UpdateRoute/>} />
        </Routes>
      </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

import LandingScreen from "./components/LandingScreen";
import PlanTimeTable from "./components/manager/PlanTimeTable";
import Login from "./components/Login";
import ManagerHome from "./components/manager/ManagerHome";
import PassengerHome from "./components/passenger/PassengerHome";
import ReloadAccount from "./components/passenger/ReloadAccount";
import AddVehicle from "./components/manager/AddVehicle";
import VehicleList from "./components/manager/VehicleList";
import ManageTimeTables from "./components/manager/ManageTimeTable";
import AddRoutes from "./components/manager/AddRoutes";
import RouteList from "./components/manager/RouteList";
import UpdateVehicle from "./components/manager/UpdateVehicle"
import UpdateRoute from "./components/manager/UpdateRoute";
import TravelHistory from "./components/passenger/TravelHistory";
import Payment from "./components/passenger/Payment";
import CheckAccBalance from "./components/passenger/CheckAccBalance";
import CheckTimetables from "./components/passenger/CheckTimetable";
import Register from "./components/Register";
import UserManagement from "./components/manager/Usermanagement";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<LandingScreen />} />
          <Route path="/plantimetable" element={<PlanTimeTable />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/managerhome" element={<ManagerHome />} />
          <Route path="/passengerhome" element={<PassengerHome />} />
          <Route path="/reloadaccount" element={<ReloadAccount />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/vehiclelist" element={<VehicleList />} />
          <Route path="/managetimetables" element={<ManageTimeTables />} />
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/routelist" element={<RouteList />} />
          <Route path="/updateVehicle/:id" element={<UpdateVehicle/>} />
          <Route path="/updateRoute/:id" element={<UpdateRoute/>} />
          <Route path="/travelhistory" element={<TravelHistory />} />

          <Route path="/payment/:amount" element={<Payment />} />
          <Route path="/checkaccbalance" element={<CheckAccBalance />} />
          <Route path="/checktimetable" element={<CheckTimetables/>} />
          <Route path="/allusers" element={<UserManagement/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;

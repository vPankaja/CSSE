import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingScreen from './components/LandingScreen';
import PlanTimeTable from './components/manager/PlanTimeTable';
import Login from './components/Login';
import ManagerHome from './components/manager/ManagerHome';
import CustomerHome from './components/customer/CustomerHome';
import ReloadAccount from './components/customer/ReloadAccount';
import AddVehicle from './components/manager/AddVehicle';
import VehicleList from './components/manager/VehicleList';
import ManageTimeTables from './components/manager/ManageTimeTable';
import AddRoutes from './components/manager/AddRoutes';
import RouteList from './components/manager/RouteList';
import MonitorNetwork from './components/manager/MonitorNetwork';
import CheckSuspects from './components/manager/CheckSuspects';
import CalculatePenalty from './components/manager/CalculatePenalty';
import UpdateVehicle from './components/manager/UpdateVehicle';
import UpdateRoute from './components/manager/UpdateRoute';
import TravelHistory from './components/customer/TravelHistory';
import Payment from './components/customer/Payment';
import CheckAccBalance from './components/customer/CheckAccBalance';
import CheckTimetables from './components/customer/CheckTimetable';

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/MonitorNetwork" element={<MonitorNetwork />} />
        <Route path="/checkSuspects" element={<CheckSuspects />} />
        <Route path="/CalculatePenalty" element={<CalculatePenalty />} />

        <Route path="/updateVehicle/:id" element={<UpdateVehicle />} />
        <Route path="/updateRoute/:id" element={<UpdateRoute />} />
        <Route path="/travelhistory" element={<TravelHistory />} />

        <Route path="/payment/:amount" element={<Payment />} />
        <Route path="/checkaccbalance" element={<CheckAccBalance />} />
        <Route path="/checktimetable" element={<CheckTimetables />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

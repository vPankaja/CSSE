import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

import LandingScreen from "./components/LandingScreen";
import PlanTimeTable from "./components/manager/PlanTimeTable";
import Login from "./components/Login";
import ManagerHome from "./components/manager/ManagerHome";
import CustomerHome from "./components/customer/CustomerHome";
import ReloadAccount from "./components/customer/ReloadAccount";
import TravelHistory from "./components/customer/TravelHistory";
import Payment from "./components/customer/Payment";
import CheckAccBalance from "./components/customer/CheckAccBalance";

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
          <Route path="/travelhistory" element={<TravelHistory />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkaccbalance" element={<CheckAccBalance />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

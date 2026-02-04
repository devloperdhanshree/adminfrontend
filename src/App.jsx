import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ApplicationsQueue from "./pages/vendormanagment/ApplicationQueue.jsx";
import VendorFinalDecision from "./pages/vendormanagment/VendorFinalDecision.jsx";
import VendorCompliance from "./pages/vendormanagment/VendorCompliance.jsx";
import ReelReview from "./pages/ReelModration/Reelreview.jsx";
import ReelApproval from "./pages/ReelModration/ReelApproval.jsx";
import AdminLayout from "./Components/Layout/AdminLayout.jsx";
import AddDeliveryBoy from "./pages/DeliveryManagment/AddDeliveryBoy.jsx";
import AssignAreas from "./pages/DeliveryManagment/AssignAreas.jsx";
import DeliveryManagement from "./pages/DeliveryManagment/DeliveryManagement.jsx";
import LiveOrders from "./pages/OrderManagment/LiveOrders.jsx";
import DeliveryStats from "./pages/OrderManagment/DeliveryStats.jsx";
import VendorSubscriptionPlans from "./pages/SubscriptionManager/VendorSubscriptionPlans.jsx";
import Subscription from "./pages/SubscriptionManager/Subscription.jsx";
import DailyRevenue from "./pages/FinanacialReport/DailyRevenue.jsx";
import DeliveryFee from "./pages/FinanacialReport/DeliveryFee.jsx";
import VendorSettlements from "./pages/FinanacialReport/VendorSettlements.jsx";
import ManageUserComplaints from "./pages/SupportSystems/ManageUserComplaints.jsx";
import AssignSupportTickets from "./pages/SupportSystems/AssignSupportTickets.jsx";
import VendorDetails from "./pages/vendormanagment/VendorDetails.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />

        {/* Admin routes wrapped in AdminLayout */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/vendors" element={<ApplicationsQueue />} />
          <Route path="/approve-reject/:id" element={<VendorFinalDecision />} />
          <Route path="/compliance" element={<VendorCompliance />} />
          <Route path="/reels" element={<ReelReview />} />
          <Route path="/reel-approval" element={<ReelApproval />} />
          <Route path="/delivery" element={<AddDeliveryBoy />} />
          <Route path="/assign-areas" element={<AssignAreas />} />
          <Route path="/delivery-management" element={<DeliveryManagement />} />
          <Route path="/orders/live" element={<LiveOrders />} />
          <Route path="/orders/stats" element={<DeliveryStats />} />
          <Route path="/subscriptions" element={<VendorSubscriptionPlans />} />
          <Route path="/subscriptions/payments" element={<Subscription />} />
          <Route path="/finance/daily-revenue" element={<DailyRevenue />} />
          <Route path="/finance/vendor-settlements" element={<VendorSettlements />} />
          <Route path="/finance/delivery-fees" element={<DeliveryFee />} />
          <Route path="/support" element={<ManageUserComplaints />} />
          <Route path="/support/tickets" element={<AssignSupportTickets />} />
          <Route path="/vendor-details/:id" element={<VendorDetails />} />
          <Route path="/compliances/:id" element={<VendorCompliance />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

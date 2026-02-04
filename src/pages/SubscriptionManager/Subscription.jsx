import React from "react";
import {
  FiSearch,
  FiDownload,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiRefreshCw,
} from "react-icons/fi";

/* 🔹 MOCK DATA (API / WebSocket ready) */
const summary = {
  activeVendors: 128,
  upcomingRenewals: 14,
  monthlyRevenue: "Rs.3,42,500",
};

const transactions = [
  {
    id: "TXN-845623",
    vendor: "Pizza Hub",
    plan: "Premium",
    amount: "Rs.2,499",
    date: "22 Jan 2026",
    status: "Success",
  },
  {
    id: "TXN-845624",
    vendor: "Burger Town",
    plan: "Basic",
    amount: "Rs.999",
    date: "22 Jan 2026",
    status: "Pending",
  },
  {
    id: "TXN-845625",
    vendor: "Biryani Express",
    plan: "Gold",
    amount: "Rs.6,999",
    date: "21 Jan 2026",
    status: "Failed",
  },
];

const statusStyle = {
  Success: "text-green-600 bg-green-50 font-semibold",
  Pending: "text-yellow-600 bg-yellow-50 font-semibold",
  Failed: "text-red-600 bg-red-50 font-semibold",
};


const Subscription = () => {
  return (
    <div className="p-6 space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          💰 Subscription Payment Tracking
        </h1>
        <p className="text-sm text-gray-500">
          Monitor transactions, invoices, and revenue flow
        </p>
      </div>

      {/* DASHBOARD SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Active Subscribers"
          value={summary.activeVendors}
          icon={<FiUsers />}
          color="text-blue-600"
        />
        <SummaryCard
          title="Upcoming Renewals (7 days)"
          value={summary.upcomingRenewals}
          icon={<FiClock />}
          color="text-orange-600"
        />
        <SummaryCard
          title="Monthly Subscription Revenue"
          value={summary.monthlyRevenue}
          icon={<FiDollarSign />}
          color="text-green-600"
        />
      </div>

      {/* SEARCH & FILTER */}
      <div className="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:w-1/3">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search vendor or transaction ID..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex gap-3">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Plans</option>
            <option>Basic</option>
            <option>Premium</option>
            <option>Gold</option>
          </select>

          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Success</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      {/* TRANSACTION LEDGER */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">Transaction ID</th>
              <th className="px-6 py-3 text-left">Vendor</th>
              <th className="px-6 py-3 text-left">Plan</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className={`border-t hover:bg-gray-50 ${
                  txn.status === "Failed" ? "bg-red-50/50" : ""
                }`}
              >
                <td className="px-6 py-4 font-medium">{txn.id}</td>
                <td className="px-6 py-4">{txn.vendor}</td>
                <td className="px-6 py-4">{txn.plan}</td>
                <td className="px-6 py-4">{txn.amount}</td>
                <td className="px-6 py-4">{txn.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyle[txn.status]
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
  <FiDownload />
  Invoice
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTIONABLE ALERT */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
        <FiAlertCircle className="text-red-600 mt-1" />
        <div>
          <h3 className="font-semibold text-red-700">
            Failed Payments Require Attention
          </h3>
          <p className="text-sm text-red-600">
            Vendors with failed subscription payments may lose access to
            premium features. Immediate follow-up is recommended.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 🔹 COMPONENTS */

const SummaryCard = ({ title, value, icon, color }) => (
  <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold text-gray-800 mt-1">
        {value}
      </p>
    </div>
    <div className={`text-2xl ${color}`}>{icon}</div>
  </div>
);

export default Subscription;

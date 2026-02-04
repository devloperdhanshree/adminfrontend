import React from "react";
import {
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
} from "react-icons/fi";

const VendorSettlements = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Vendor Settlements
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Track vendor payouts, settlement status, and dispute adjustments
        </p>
      </div>

      {/* KPI SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Payable Today"
          value="Rs.1,18,400"
          icon={<FiDollarSign />}
          color="bg-green-100 text-green-600"
        />
        <StatCard
          title="Pending Settlements"
          value="Rs.32,700"
          icon={<FiClock />}
          color="bg-orange-100 text-orange-600"
        />
        <StatCard
          title="Completed Payouts"
          value="Rs.85,300"
          icon={<FiCheckCircle />}
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Disputed Amount"
          value="Rs.3,900"
          icon={<FiAlertCircle />}
          color="bg-red-100 text-red-600"
        />
      </div>

      {/* SETTLEMENT TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">
            Settlement Ledger
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Vendor</th>
                <th className="px-4 py-3 text-left">Gross Earnings</th>
                <th className="px-4 py-3 text-left">Commission</th>
                <th className="px-4 py-3 text-left">Net Payable</th>
                <th className="px-4 py-3 text-left">Payout Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <SettlementRow
                vendor="Spice Hub"
                gross="Rs.24,500"
                commission="Rs.3,675"
                net="Rs.20,825"
                date="Today"
                status="Processing"
              />
              <SettlementRow
                vendor="Burger Town"
                gross="Rs.18,200"
                commission="Rs.2,730"
                net="Rs.15,470"
                date="Today"
                status="Initiated"
              />
              <SettlementRow
                vendor="Pizza Corner"
                gross="Rs.32,800"
                commission="Rs.4,920"
                net="Rs.27,880"
                date="Yesterday"
                status="Completed"
              />
              <SettlementRow
                vendor="Green Bowl"
                gross="Rs.9,600"
                commission="Rs.1,440"
                net="Rs.8,160"
                date="Yesterday"
                status="Failed"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* KPI CARD */
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-gray-800 mt-1">{value}</h3>
    </div>
    <div className={`p-4 rounded-full ${color} text-xl`}>
      {icon}
    </div>
  </div>
);

/* SETTLEMENT ROW */
const SettlementRow = ({
  vendor,
  gross,
  commission,
  net,
  date,
  status,
}) => {
  const statusStyles = {
    Initiated: "bg-blue-100 text-blue-600 font-semibold",
    Processing: "bg-orange-100 text-orange-600 font-semibold",
    Completed: "bg-green-100 text-green-600 font-semibold",
    Failed: "bg-red-100 text-red-600 font-semibold",
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 font-medium text-gray-700">
        {vendor}
      </td>
      <td className="px-4 py-3">{gross}</td>
      <td className="px-4 py-3">{commission}</td>
      <td className="px-4 py-3 font-semibold">{net}</td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-3">
     <button className="text-blue-600 hover:underline text-xs font-semibold">
  View Ledger
</button>

      </td>
    </tr>
  );
};

export default VendorSettlements;

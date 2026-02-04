
import React from "react";
import {
  FiTruck,
  FiMap,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

const DeliveryFee = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Delivery Fee Analytics
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Analyze delivery costs, fleet efficiency, and profitability
        </p>
      </div>

      {/* KPI WIDGETS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KpiCard
          title="Delivery Fees Collected"
          value="Rs.58,400"
          icon={<FiTrendingUp />}
          color="bg-green-100 text-green-600"
        />
        <KpiCard
          title="Fleet Payouts"
          value="Rs.42,700"
          icon={<FiTruck />}
          color="bg-blue-100 text-blue-600"
        />
        <KpiCard
          title="Net Delivery Margin"
          value="Rs.15,700"
          icon={<FiTrendingUp />}
          color="bg-purple-100 text-purple-600"
        />
        <KpiCard
          title="Avg Cost / Km"
          value="Rs.12.8"
          icon={<FiClock />}
          color="bg-orange-100 text-orange-600"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Fleet Comparison */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Admin Delivery vs Vendor Delivery
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
            Bar Chart – Cost & Revenue Comparison
          </div>
        </div>

        {/* Distance vs Time */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Distance vs Time Cost Metrics
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
            Line Chart – Cost per Km vs Delivery Time
          </div>
        </div>
      </div>

      {/* GEO HEATMAP */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Geographical Delivery Cost Heatmap
        </h2>

        <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
          Heatmap – High Cost / High Demand Zones
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Delivery Cost Breakdown
          </h2>

          <div className="flex gap-3">
            <input
              type="date"
              className="border rounded-lg px-3 py-1 text-sm"
            />
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>All Fleets</option>
              <option>Admin Delivery</option>
              <option>Vendor Delivery</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Area</th>
                <th className="px-4 py-3 text-left">Fleet Type</th>
                <th className="px-4 py-3 text-left">Avg Distance (km)</th>
                <th className="px-4 py-3 text-left">Avg Time (min)</th>
                <th className="px-4 py-3 text-left">Cost / Order</th>
                <th className="px-4 py-3 text-left">Margin</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <CostRow
                area="Central City"
                fleet="Admin"
                distance="5.4"
                time="28"
                cost="Rs.68"
                margin="Rs.22"
              />
              <CostRow
                area="North Zone"
                fleet="Vendor"
                distance="6.1"
                time="34"
                cost="Rs.75"
                margin="Rs.14"
              />
              <CostRow
                area="East Market"
                fleet="Admin"
                distance="4.2"
                time="22"
                cost="Rs.55"
                margin="Rs.26"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* KPI CARD */
const KpiCard = ({ title, value, icon, color }) => (
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

/* TABLE ROW */
const CostRow = ({ area, fleet, distance, time, cost, margin }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-4 py-3 font-medium">{area}</td>
    <td className="px-4 py-3">
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${fleet === "Admin"
            ? "bg-blue-100 text-blue-600"
            : "bg-purple-100 text-purple-600"
          }`}
      >
        {fleet}
      </span>
    </td>

    <td className="px-4 py-3">{distance}</td>
    <td className="px-4 py-3">{time}</td>
    <td className="px-4 py-3">{cost}</td>
    <td className="px-4 py-3 font-semibold text-green-600">
      {margin}
    </td>
  </tr>
);

export default DeliveryFee;

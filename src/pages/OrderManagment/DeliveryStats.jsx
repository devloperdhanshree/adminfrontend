import AdminLayout from "../../Components/Layout/AdminLayout.jsx";
import React from "react";
import {
  FiTruck,
  FiTrendingUp,
  FiCheckCircle,
  FiXCircle,
  FiClock,
} from "react-icons/fi";

const stats = {
  admin: {
    avgTime: 28,
    completed: 420,
    cancelled: 35,
  },
  vendor: {
    avgTime: 34,
    completed: 360,
    cancelled: 62,
  },
};

const DeliveryStats = () => {
  const totalAdmin = stats.admin.completed + stats.admin.cancelled;
  const totalVendor = stats.vendor.completed + stats.vendor.cancelled;

  const adminSuccess = Math.round(
    (stats.admin.completed / totalAdmin) * 100
  );
  const vendorSuccess = Math.round(
    (stats.vendor.completed / totalVendor) * 100
  );

  const winner =
    stats.admin.avgTime < stats.vendor.avgTime
      ? "Admin Delivery"
      : "Vendor Delivery";

  return (
    <div className="p-6 space-y-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
           Vendor vs Admin Delivery Stats
        </h1>
        <p className="text-sm text-gray-500">
          Performance comparison between delivery models
        </p>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Top Performing Fleet"
          value={winner}
          icon={<FiTrendingUp />}
          color="text-green-600"
        />
        <StatCard
          title="Admin Success Rate"
          value={`${adminSuccess}%`}
          icon={<FiCheckCircle />}
          color="text-blue-600"
        />
        <StatCard
          title="Vendor Success Rate"
          value={`${vendorSuccess}%`}
          icon={<FiCheckCircle />}
          color="text-purple-600"
        />
      </div>

      {/* COMPARATIVE GRAPHS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* AVG DELIVERY TIME */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FiClock /> Average Delivery Time (mins)
          </h2>

          <Bar
            label="Admin Delivery"
            value={stats.admin.avgTime}
            max={60}
            color="bg-blue-500"
          />
          <Bar
            label="Vendor Delivery"
            value={stats.vendor.avgTime}
            max={60}
            color="bg-purple-500"
          />
        </div>

        {/* ORDER VOLUME */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FiTruck /> Order Volume Comparison
          </h2>

          <Bar
            label="Admin Completed"
            value={stats.admin.completed}
            max={500}
            color="bg-green-500"
          />
          <Bar
            label="Admin Cancelled"
            value={stats.admin.cancelled}
            max={500}
            color="bg-red-400"
          />

          <div className="my-4" />

          <Bar
            label="Vendor Completed"
            value={stats.vendor.completed}
            max={500}
            color="bg-green-500"
          />
          <Bar
            label="Vendor Cancelled"
            value={stats.vendor.cancelled}
            max={500}
            color="bg-red-400"
          />
        </div>
      </div>

      {/* STRATEGIC INSIGHTS */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="font-semibold text-blue-700 mb-2">
           Strategic Insight
        </h3>
        <p className="text-sm text-blue-600">
          Admin Delivery currently outperforms Vendor Delivery with faster
          average delivery time and higher success rate. Consider prioritizing
          Admin fleet in high-demand zones to reduce delays and improve customer
          satisfaction.
        </p>
      </div>
    </div>
  );
};

/* 🔹 COMPONENTS */

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>
    </div>
    <div className={`text-2xl ${color}`}>{icon}</div>
  </div>
);

const Bar = ({ label, value, max, color }) => {
  const width = Math.min((value / max) * 100, 100);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-gray-700">{value}</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default DeliveryStats;

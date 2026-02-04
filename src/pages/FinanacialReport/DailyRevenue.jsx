import React from "react";
import {
  FiTrendingUp,
  FiDollarSign,
  FiFileText,
  FiDownload,
} from "react-icons/fi";

const DailyRevenue = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Daily Revenue Overview
        </h1>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-100">
            <FiDownload />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FiFileText />
            Export PDF
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard
          title="Gross Sales"
          value="Rs.2,45,300"
          icon={<FiDollarSign />}
          color="bg-green-100 text-green-600"
        />
        <KpiCard
          title="Platform Commission"
          value="Rs.42,600"
          icon={<FiTrendingUp />}
          color="bg-blue-100 text-blue-600"
        />
        <KpiCard
          title="Taxes Collected"
          value="Rs.18,900"
          icon={<FiFileText />}
          color="bg-orange-100 text-orange-600"
        />
      </div>

      {/* REVENUE SEGMENTATION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SegmentCard title="Order Commissions" amount="Rs.31,200" />
        <SegmentCard title="Vendor Subscriptions" amount="Rs.7,800" />
        <SegmentCard title="Delivery Surcharges" amount="Rs.3,600" />
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Revenue Trend (Today vs Last Weeks)
          </h2>

          {/* Chart Placeholder */}
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
            Multi-line Revenue Chart (Today vs Past Weeks)
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Revenue Source Breakdown
          </h2>

          {/* Chart Placeholder */}
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
            Pie Chart – Revenue Segments
          </div>
        </div>
      </div>
    </div>
  );
};

/* KPI CARD COMPONENT */
const KpiCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
    </div>
    <div className={`p-4 rounded-full ${color} text-xl`}>
      {icon}
    </div>
  </div>
);

/* SEGMENT CARD */
const SegmentCard = ({ title, amount }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-xl font-semibold text-gray-800 mt-2">
      {amount}
    </h3>
  </div>
);

export default DailyRevenue;

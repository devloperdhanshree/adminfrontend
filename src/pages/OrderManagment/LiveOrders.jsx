import AdminLayout from "../../Components/Layout/AdminLayout.jsx";
import React from "react";
import {
  FiClock,
  FiMapPin,
  FiPhone,
  FiUser,
  FiTruck,
} from "react-icons/fi";

const orders = [
  {
    id: "ORD-10234",
    customer: "Rahul Sharma",
    vendor: "Pizza Hub",
    status: "On the way",
    eta: "12 mins",
    rider: "Amit",
    phone: "98xxxx321",
    delayed: false,
  },
  {
    id: "ORD-10235",
    customer: "Sneha Patel",
    vendor: "Burger Town",
    status: "Preparing",
    eta: "20 mins",
    rider: "—",
    phone: "—",
    delayed: true,
  },
  {
    id: "ORD-10236",
    customer: "Arjun Verma",
    vendor: "Biryani Express",
    status: "Delivered",
    eta: "Completed",
    rider: "Ravi",
    phone: "99xxxx876",
    delayed: false,
  },
];

const statusStyles = {
  "Preparing": "bg-yellow-100 text-yellow-700 font-semibold",
  "On the way": "bg-blue-100 text-blue-700 font-semibold",
  "Delivered": "bg-green-100 text-green-700 font-semibold",
};

const LiveOrders = () => {
  return (
    <div className="p-6 space-y-6">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
           Live Order Monitoring
        </h1>
        <span className="text-sm text-gray-500">
          Auto-refreshing • Real-time view
        </span>
      </div>

      {/* DASHBOARD GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT: LIVE ORDERS LIST */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow">
          <div className="border-b px-6 py-4 font-semibold text-gray-700">
            Active Orders
          </div>

          <div className="divide-y">
            {orders.map((order) => (
              <div
                key={order.id}
                className={`p-5 flex justify-between items-center hover:bg-gray-50 transition ${
                  order.delayed ? "animate-pulse bg-red-50" : ""
                }`}
              >
                {/* ORDER INFO */}
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">
                    {order.id} • {order.vendor}
                  </p>
                  <p className="text-sm text-gray-500">
                    Customer: {order.customer}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FiClock />
                    <span>ETA: {order.eta}</span>
                  </div>
                </div>

                {/* STATUS */}
                <div className="text-right space-y-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>

                  {order.delayed && (
                    <p className="text-xs text-red-600 font-medium">
                      ⚠ Delayed
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: LIVE MAP + DETAILS */}
        <div className="bg-white rounded-xl shadow flex flex-col">
          <div className="border-b px-6 py-4 font-semibold text-gray-700">
            Live Tracking
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="h-56 bg-gray-100 flex items-center justify-center text-gray-400">
            🗺 Live Map Integration (Google / Mapbox)
          </div>

          {/* ORDER DETAILS */}
          <div className="p-5 space-y-4 text-sm">
            <h3 className="font-semibold text-gray-700">
              Selected Order Details
            </h3>

            <div className="flex items-center gap-3">
              <FiUser className="text-gray-400" />
              <span>Delivery Partner: Amit</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-gray-400" />
              <span>Contact: 98xxxx321</span>
            </div>

            <div className="flex items-center gap-3">
              <FiTruck className="text-gray-400" />
              <span>Status: On the way</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-gray-400" />
              <span>Customer Address: Sector 18, Noida</span>
            </div>

            <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Full Order Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOrders;

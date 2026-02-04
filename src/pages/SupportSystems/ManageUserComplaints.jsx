import React, { useState } from "react";
import {
  FiAlertCircle,
  FiMessageSquare,
  FiUser,
  FiTruck,
  FiPackage,
} from "react-icons/fi";

const complaintsData = [
  {
    id: "CMP-1021",
    user: "Rahul Sharma",
    issue: "Food Safety Issue",
    severity: "High",
    orderId: "ORD-78291",
    vendor: "Spice Hub",
    deliveryBoy: "Amit Kumar",
    messages: [
      { sender: "User", text: "Food smelled bad and tasted spoiled." },
      { sender: "Support", text: "Sorry for the inconvenience. We are checking." },
    ],
  },
  {
    id: "CMP-1022",
    user: "Priya Verma",
    issue: "Missing Item",
    severity: "Medium",
    orderId: "ORD-78294",
    vendor: "Burger Town",
    deliveryBoy: "Rohit Singh",
    messages: [
      { sender: "User", text: "Fries were missing from the order." },
    ],
  },
];

const ManageUserComplaints = () => {
  const [activeComplaint, setActiveComplaint] = useState(complaintsData[0]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Manage User Complaints
      </h1>

      <div className="flex gap-6">
        {/* COMPLAINT INBOX */}
        <div className="w-1/3 bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Complaint Inbox
          </h2>

          <div className="space-y-3 overflow-y-auto h-[500px] pr-2">
            {complaintsData.map((complaint) => (
              <div
                key={complaint.id}
                onClick={() => setActiveComplaint(complaint)}
                className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                  activeComplaint.id === complaint.id
                    ? "border-blue-500 bg-blue-50"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800">
                    {complaint.issue}
                  </p>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      complaint.severity === "High"
                        ? "bg-red-100 text-red-700 font-semibold"
                        : "bg-yellow-100 text-yellow-700 font-semibold"
                    }`}
                  >
                    {complaint.severity}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {complaint.user} • {complaint.id}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RESOLUTION WORKSPACE */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
          {/* CONTEXT INFO */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <InfoCard
              icon={<FiPackage />}
              label="Order ID"
              value={activeComplaint.orderId}
            />
            <InfoCard
              icon={<FiUser />}
              label="Vendor"
              value={activeComplaint.vendor}
            />
            <InfoCard
              icon={<FiTruck />}
              label="Delivery Partner"
              value={activeComplaint.deliveryBoy}
            />
            <InfoCard
              icon={<FiAlertCircle />}
              label="Issue Type"
              value={activeComplaint.issue}
            />
          </div>

          {/* INTERACTION HISTORY */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Interaction History
            </h2>

            <div className="border rounded-lg p-4 h-[300px] overflow-y-auto space-y-3 bg-gray-50">
              {activeComplaint.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "Support" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-md ${
                      msg.sender === "Support"
                        ? "bg-blue-600 text-white"
                        : "bg-white border"
                    }`}
                  >
                    <p className="text-xs opacity-70 mb-1">
                      {msg.sender}
                    </p>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESPONSE BOX */}
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              placeholder="Type your response..."
              className="flex-1 border rounded-lg px-4 py-2 text-sm"
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <FiMessageSquare />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* INFO CARD */
const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-gray-50 border rounded-lg p-4">
    <div className="text-xl text-blue-600">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default ManageUserComplaints;

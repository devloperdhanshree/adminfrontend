import React, { useState } from "react";
import {
  FiUserPlus,
  FiChevronDown,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

const admins = [
  { id: 1, name: "Ankit", role: "Support", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Neha", role: "Finance", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Rohit", role: "Support", avatar: "https://i.pravatar.cc/40?img=3" },
];

const ticketsData = [
  {
    id: "TCK-9001",
    issue: "Refund not received",
    category: "Finance",
    status: "Open",
    assignedTo: [],
    notes: "",
  },
  {
    id: "TCK-9002",
    issue: "Late delivery complaint",
    category: "Support",
    status: "In Progress",
    assignedTo: [admins[0]],
    notes: "Waiting for delivery partner response",
  },
  {
    id: "TCK-9003",
    issue: "Missing item in order",
    category: "Support",
    status: "Open",
    assignedTo: [],
    notes: "",
  },
];

const statusColors = {
  Open: "bg-gray-100 text-gray-700 font-semibold",
  "In Progress": "bg-blue-100 text-blue-700 font-semibold",
  "Pending User Input": "bg-yellow-100 text-yellow-700 font-semibold",
  Resolved: "bg-green-100 text-green-700 font-semibold",
};

const AssignSupportTickets = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [activeTicket, setActiveTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openStatusDropdown, setOpenStatusDropdown] = useState(null);

  // Assign admin to ticket
  const assignAdmin = (admin) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === activeTicket.id
          ? { ...t, assignedTo: [...t.assignedTo, admin] }
          : t
      )
    );
    setShowModal(false);
  };

  // Update ticket status
  const updateStatus = (ticketId, status) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status } : t))
    );
    setOpenStatusDropdown(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Assign Support Tickets
      </h1>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-xl shadow-sm p-5 flex justify-between items-start"
          >
            {/* LEFT */}
            <div>
              <p className="font-semibold text-gray-800">{ticket.issue}</p>
              <p className="text-sm text-gray-500">{ticket.id}</p>

              {/* STATUS DROPDOWN */}
              <div className="relative inline-block mt-3">
                <button
                  onClick={() =>
                    setOpenStatusDropdown(
                      openStatusDropdown === ticket.id ? null : ticket.id
                    )
                  }
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]} flex items-center gap-1`}
                >
                  {ticket.status}
                  <FiChevronDown />
                </button>

                {openStatusDropdown === ticket.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-lg z-10">
                    {Object.keys(statusColors).map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(ticket.id, status)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-3">
              {/* AVATAR STACK */}
              <div className="flex -space-x-2">
                {ticket.assignedTo.map((admin) => (
                  <img
                    key={admin.id}
                    src={admin.avatar}
                    alt={admin.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  setActiveTicket(ticket);
                  setShowModal(true);
                }}
                className="flex items-center gap-2 text-sm px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FiUserPlus />
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ASSIGN MODAL */}
      {showModal && activeTicket && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Assign Ticket
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              {activeTicket.issue} ({activeTicket.id})
            </p>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {admins
                .filter((a) => a.role === activeTicket.category)
                .map((admin) => (
                  <button
                    key={admin.id}
                    onClick={() => assignAdmin(admin)}
                    className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src={admin.avatar}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{admin.name}</p>
                      <p className="text-xs text-gray-500">{admin.role}</p>
                    </div>
                  </button>
                ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignSupportTickets;

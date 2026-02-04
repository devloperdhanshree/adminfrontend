// AdminHeader.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiBell,
  FiUser,
  FiChevronDown,
  FiLogOut,
  FiShield,
} from "react-icons/fi";

const SEARCH_ROUTES = {
  "Vendor Management": "/vendors",
  "Review applications": "/vendors",
  "Approve / Reject vendor": "/approve-reject/:id",
  "Verify documents": "/compliances/:id",

  "Reel Moderation": "/reels",
  "Review uploaded food reels": "/reels",
  "Approve / Reject": "/reel-approval",

  "Delivery Boy Management": "/delivery",
  "Add delivery boys": "/delivery",
  "Assign areas": "/assign-areas",
  "Track live locations": "/delivery-management",

  "Order Monitoring": "/orders",
  "Track all orders live": "/orders",
  "Vendor delivery vs. Admin delivery stats": "/orders/stats",

  "Subscription Management": "/subscriptions",
  "Vendor subscription plans": "/subscriptions",
  "Payment tracking": "/subscriptions/payments",

  "Financial Reports": "/finance/daily-revenue",
  "Daily revenue": "/finance/daily-revenue",
  "Vendor settlements": "/finance/vendor-settlements",
  "Delivery fee analytics": "/finance/delivery-fees",

  "Support System": "/support",
  "Manage user complaints": "/support",
  "Assign support tickets": "/support/tickets",
};

const SEARCH_OPTIONS = Object.keys(SEARCH_ROUTES);

const AdminHeader = ({ role = "Super Admin", adminName = "admin" }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  // ✅ FIXED: handleLogout inside component
  const handleLogout = () => {
    // clear auth/token here if needed
    navigate("/");
  };

  const filteredResults = SEARCH_OPTIONS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* 🔍 Search */}
      <div className="flex items-center flex-1 max-w-lg relative">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            placeholder="Search orders, vendors, or partners..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
          />

          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />

          {showResults && query && (
            <ul className="absolute z-50 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
              {filteredResults.length ? (
                filteredResults.map((item, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      navigate(SEARCH_ROUTES[item]);
                      setQuery("");
                      setShowResults(false);
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-400">
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Role */}
      <div className="hidden md:flex mx-6">
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
          {role}
        </span>
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1.5 rounded-full">
            3
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <FiUser />
            <span className="text-sm">{adminName}</span>
            <FiChevronDown />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow">
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                <FiShield className="mr-2" /> 2FA Settings
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <FiLogOut className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

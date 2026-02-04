import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiVideo,
  FiTruck,
  FiCreditCard,
  FiLifeBuoy,
  FiChevronDown,
  FiChevronUp,
  FiBarChart2,
  FiPackage,
} from "react-icons/fi";

const SIDEBAR_ROUTES = {
  "Dashboard Overview": "/dashboard",
  "Vendor Management": "/vendors",
  "Review applications": "/vendors",
  "Approve / Reject vendor": "/approve-reject/:id",
  "Verify documents": "/compliances/:id",
  "Reel Moderation": "/reels",
  "Review uploaded food reels": "/reels",
  "Approve / Reject": "/reel-approval",
  "Delivery Management": "/delivery",
  "Add delivery boys": "/delivery",
  "Assign service areas": "/assign-areas",
  "Track live locations": "/delivery-management",
  "Order Monitoring": "/orders",
  "Track all orders live": "/orders/live",
  "Vendor delivery vs Admin delivery stats": "/orders/stats",
  "Subscription Management": "/subscriptions",
  "Vendor subscription plans": "/subscriptions",
  "Payment tracking": "/subscriptions/payments",
  "Financial Reports": "/finance",
  "Daily revenue": "/finance/daily-revenue",
  "Vendor settlements": "/finance/vendor-settlements",
  "Delivery fee analytics": "/finance/delivery-fees",
  "Support System": "/support",
  "Manage user complaints": "/support",
  "Assign support tickets": "/support/tickets",
};

const AdminSidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [clickedItem, setClickedItem] = useState(null); // track clicked menu
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Clear clicked item if route changed
    if (clickedItem && location.pathname === SIDEBAR_ROUTES[clickedItem]) {
      setClickedItem(null);
    }
  }, [location, clickedItem]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    { name: "Dashboard Overview", icon: <FiHome /> },
    {
      name: "Vendor Management",
      icon: <FiUsers />,
      subItems: ["Review applications", "Approve / Reject vendor", "Verify documents"],
    },
    {
      name: "Reel Moderation",
      icon: <FiVideo />,
      subItems: ["Review uploaded food reels", "Approve / Reject"],
    },
    {
      name: "Delivery Management",
      icon: <FiTruck />,
      subItems: ["Add delivery boys", "Assign service areas", "Track live locations"],
    },
    {
      name: "Order Monitoring",
      icon: <FiPackage />,
      subItems: ["Track all orders live", "Vendor delivery vs Admin delivery stats"],
    },
    {
      name: "Subscription Management",
      icon: <FiCreditCard />,
      subItems: ["Vendor subscription plans", "Payment tracking"],
    },
    {
      name: "Financial Reports",
      icon: <FiBarChart2 />,
      subItems: ["Daily revenue", "Vendor settlements", "Delivery fee analytics"],
    },
    {
      name: "Support System",
      icon: <FiLifeBuoy />,
      subItems: ["Manage user complaints", "Assign support tickets"],
    },
  ];

  const handleNavigate = (itemName, subItem = null) => {
    const route = subItem ? SIDEBAR_ROUTES[subItem] : SIDEBAR_ROUTES[itemName];
    setClickedItem(subItem || itemName); // mark clicked
    navigate(route);
  };

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0 flex flex-col">
      {/* HEADER */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
      </div>

      {/* SCROLLABLE MENU */}
      <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === SIDEBAR_ROUTES[item.name] ||
                             (item.subItems && item.subItems.some(sub => location.pathname === SIDEBAR_ROUTES[sub]));
            const isClicked = clickedItem === item.name;

            return (
              <div key={item.name}>
                {/* MAIN MENU */}
                <button
                  onClick={() =>
                    item.subItems
                      ? toggleMenu(item.name)
                      : handleNavigate(item.name)
                  }
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors
                    ${isActive || isClicked ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </div>

                  {item.subItems &&
                    (openMenu === item.name ? <FiChevronUp /> : <FiChevronDown />)}
                </button>

                {/* SUB MENU */}
                {item.subItems && openMenu === item.name && (
                  <ul className="pl-12 mt-1 space-y-1">
                    {item.subItems.map((subItem) => {
                      const isSubActive = location.pathname === SIDEBAR_ROUTES[subItem];
                      const isSubClicked = clickedItem === subItem;

                      return (
                        <li
                          key={subItem}
                          onClick={() => handleNavigate(item.name, subItem)}
                          className={`py-2 px-3 rounded-lg cursor-pointer transition-colors
                            ${isSubActive || isSubClicked ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"}`}
                        >
                          {subItem}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;

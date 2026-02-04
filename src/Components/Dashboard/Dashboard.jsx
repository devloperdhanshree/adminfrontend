import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Store,
  Video,
  Truck,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Headphones,
  IndianRupee,
  XCircle,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ================= DASHBOARD CARDS ================= */
const dashboardItems = [
  {
    title: "Vendor Management",
    description: "Review applications, approve/reject vendors",
    icon: Store,
    roles: ["Super Admin", "Finance", "Support"],
  },
  {
    title: "Reel Moderation",
    description: "Review food reels and approve/reject",
    icon: Video,
    roles: ["Super Admin", "Support"],
  },
  {
    title: "Delivery Boy Management",
    description: "Add delivery boys, assign areas",
    icon: Truck,
    roles: ["Super Admin", "Support"],
  },
  {
    title: "Order Monitoring",
    description: "Track live orders",
    icon: ShoppingCart,
    roles: ["Super Admin", "Support"],
  },
  {
    title: "Subscription Management",
    description: "Vendor plans and payments",
    icon: CreditCard,
    roles: ["Super Admin", "Finance"],
  },
  {
    title: "Financial Reports",
    description: "Revenue & settlement analytics",
    icon: BarChart3,
    roles: ["Super Admin", "Finance"],
  },
  {
    title: "Support System",
    description: "Manage complaints & tickets",
    icon: Headphones,
    roles: ["Super Admin", "Support"],
  },
];

/* ================= KPI DATA ================= */
const kpis = [
  { title: "Total Orders", value: "1,245", icon: ShoppingCart, color: "text-indigo-600" },
  { title: "Delivered", value: "1,089", icon: Truck, color: "text-green-600" },
  { title: "Cancelled", value: "56", icon: XCircle, color: "text-red-600" },
  { title: "Revenue", value: "₹7.8L", icon: IndianRupee, color: "text-yellow-600" },
];

/* ================= CHART DATA ================= */
const revenueData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 75 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 120 },
];

const orderData = [
  { day: "Mon", orders: 60 },
  { day: "Tue", orders: 75 },
  { day: "Wed", orders: 90 },
  { day: "Thu", orders: 120 },
  { day: "Fri", orders: 100 },
  { day: "Sat", orders: 130 },
  { day: "Sun", orders: 150 },
];

/* ================= TRENDING ITEMS ================= */
const trendingItems = [
  { name: "Veg Biryani", price: "₹160", img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=800&q=80" },
  { name: "Cheese Pizza", price: "₹250", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80" },
  { name: "Veg Burger", price: "₹150", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
  { name: "Paneer Butter Masala", price: "₹220", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80" },
  { name: "Masala Dosa", price: "₹120", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80" },
  { name: "Veg Momos", price: "₹140", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80" },
  { name: "Pasta", price: "₹130", img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Chole Bhature", price: "₹180", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80" },
  { name: "Veg Fried Rice", price: "₹160", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80" },
  { name: "Ice Cream Sundae", price: "₹110", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500">Food Delivery Platform Control Panel</p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{kpi.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{kpi.value}</h3>
                </div>
                <Icon className={`w-8 h-8 ${kpi.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Revenue Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Orders Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={orderData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#22C55E" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TRENDING ITEMS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Trending Items</h2>
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory max-w-[940px]">
            {trendingItems.map((item) => (
              <div
                key={item.name}
                className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-md snap-start"
              >
                <div className="w-full h-[280px] flex items-center justify-center rounded-t-2xl bg-gray-50">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-auto max-w-[100%] object-cover rounded-xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

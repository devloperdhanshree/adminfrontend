import AdminLayout from "../../Components/Layout/AdminLayout.jsx";
import React from "react";
import {
  FiStar,
  FiEdit,
  FiRefreshCw,
  FiUsers,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

/* 🔹 MOCK DATA (replace with API / WebSocket) */
const plans = [
  {
    name: "Basic",
    price: "Rs.999 / month",
    commission: "15%",
    validity: "Monthly",
    features: [
      "Standard listing",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Premium",
    price: "Rs.2,499 / month",
    commission: "10%",
    validity: "Monthly",
    features: [
      "Featured listing",
      "Advanced analytics",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Gold",
    price: "Rs.6,999 / year",
    commission: "7%",
    validity: "Yearly",
    features: [
      "Top search placement",
      "Full analytics suite",
      "Dedicated account manager",
    ],
  },
];

const vendors = [
  {
    name: "Pizza Hub",
    plan: "Premium",
    expiresIn: "5 days",
    status: "expiring",
  },
  {
    name: "Burger Town",
    plan: "Basic",
    expiresIn: "Active",
    status: "active",
  },
  {
    name: "Biryani Express",
    plan: "Gold",
    expiresIn: "120 days",
    status: "active",
  },
];

const VendorSubscriptionPlans = () => {
  return (
    <div className="p-6 space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Vendor Subscription Plans
        </h1>
        <p className="text-sm text-gray-500">
          Manage plans, pricing, and vendor assignments
        </p>
      </div>

      {/* PLAN CONFIGURATION */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Subscription Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white shadow rounded-xl p-6 border ${plan.popular
                ? "border-blue-500"
                : "border-gray-100"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FiStar className="text-yellow-400" />
                {plan.name}
              </h3>

              <p className="text-2xl font-bold text-blue-600 mt-2">
                {plan.price}
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Commission:</strong> {plan.commission}
                </p>
                <p>
                  <strong>Billing:</strong> {plan.validity}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <FiCheckCircle className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-5 w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
                <FiEdit />
                Edit Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* VENDOR PLAN ASSIGNMENT */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Vendor Plan Assignment
        </h2>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Vendor</th>
                <th className="px-6 py-3 text-left">Current Plan</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr
                  key={vendor.name}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {vendor.name}
                  </td>

                  <td className="px-6 py-4">{vendor.plan}</td>

                  <td className="px-6 py-4">
                    {vendor.status === "expiring" ? (
                      <span className="flex items-center gap-1 text-orange-600 font-semibold">
                        <FiAlertCircle />
                        Expiring in {vendor.expiresIn}
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    )}
                  </td>



                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-blue-600 font-semibold hover:underline">
                      Upgrade / Downgrade
                    </button>
                    <button className="text-gray-500 font-semibold hover:underline">
                      Renew
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AUTOMATED RENEWALS INFO */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h3 className="font-semibold text-yellow-700 mb-1">
          Automated Renewal Alerts
        </h3>
        <p className="text-sm text-yellow-600">
          Vendors are automatically notified via email and in-app alerts
          before subscription expiry to ensure uninterrupted service.
        </p>
      </div>
    </div>
  );
};

export default VendorSubscriptionPlans;

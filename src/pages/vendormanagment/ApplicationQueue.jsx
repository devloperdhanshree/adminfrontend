import { useNavigate } from "react-router-dom";
import { Phone, Eye } from "lucide-react";

const applications = [
  {
    id: 1,
    name: "Spice Hub",
    city: "Bangalore, KA",
    cuisine: "North Indian",
    pendingDays: 2,
    completion: 85,
    phone: "+91 9876543210",
    email: "spicehub@gmail.com",
    owner: "Rahul Sharma",
    documents: {
      gst: true,
      fssai: true,
      pan: false,
    },
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
  {
    id: 2,
    name: "Italiano Pizza",
    city: "Mumbai, MH",
    cuisine: "Italian",
    pendingDays: 5,
    completion: 70,
    phone: "+91 9123456780",
    email: "italiano@gmail.com",
    owner: "Aman Verma",
    documents: {
      gst: true,
      fssai: false,
      pan: false,
    },
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 3,
    name: "Wok Express",
    city: "Delhi, DL",
    cuisine: "Chinese",
    pendingDays: 1,
    completion: 92,
    phone: "+91 9988776655",
    email: "wokexpress@gmail.com",
    owner: "Neha Gupta",
    documents: {
      gst: true,
      fssai: true,
      pan: true,
    },
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
];

const ApplicationQueue = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Review Applications
        </h1>
        <p className="text-sm text-gray-500">
          Review and onboard new restaurant partners
        </p>
      </div>

      {/* Applications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={app.image}
              alt={app.name}
              className="h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {app.name}
              </h2>

              <p className="text-sm text-gray-500">
                {app.city} • {app.cuisine}
              </p>

              {/* Pending */}
              <div className="mt-3 text-sm">
                <span className="text-gray-500">Pending:</span>{" "}
                <span className="font-medium text-gray-800">
                  {app.pendingDays} days
                </span>
              </div>

              {/* Profile Completeness */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Profile Completeness</span>
                  <span>{app.completion}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${app.completion}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={() => navigate(`/vendor-details/${app.id}`)}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Eye size={16} />
                  View Details
                </button>

                <a
                  href={`tel:${app.phone}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-red-700"
                >
                  <Phone size={16} />
                  Quick Call
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationQueue;

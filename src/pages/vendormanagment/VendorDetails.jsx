import { useParams, useNavigate } from "react-router-dom";

const vendors = [
  {
    id: 1,
    name: "Spice Hub",
    city: "Bangalore, KA",
    cuisine: "North Indian",
    owner: "Rahul Sharma",
    phone: "+91 9876543210",
    email: "spicehub@gmail.com",
    completion: 85,
    address: "12th Main, Indiranagar, Bangalore",
    openingHours: "10:00 AM - 11:00 PM",
    bank: {
      accountName: "Spice Hub Pvt Ltd",
      accountNumber: "XXXXXX4321",
      ifsc: "HDFC0001234",
    },
    documents: {
      gst: true,
      fssai: true,
      pan: false,
    },
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
  {
    id: 2,
    name: "Italiano Pizza",
    city: "Mumbai, MH",
    cuisine: "Italian",
    owner: "Aman Verma",
    phone: "+91 9123456780",
    email: "italiano@gmail.com",
    completion: 70,
    address: "Bandra West, Mumbai",
    openingHours: "11:00 AM - 12:00 AM",
    bank: {
      accountName: "Italiano Foods",
      accountNumber: "XXXXXX8765",
      ifsc: "ICIC0005678",
    },
    documents: {
      gst: true,
      fssai: false,
      pan: false,
    },
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 3,
    name: "Wok Express",
    city: "Delhi, DL",
    cuisine: "Chinese",
    owner: "Neha Gupta",
    phone: "+91 9988776655",
    email: "wokexpress@gmail.com",
    completion: 92,
    address: "CP, Connaught Place, Delhi",
    openingHours: "9:00 AM - 10:30 PM",
    bank: {
      accountName: "Wok Express LLP",
      accountNumber: "XXXXXX1122",
      ifsc: "SBIN0004455",
    },
    documents: {
      gst: true,
      fssai: true,
      pan: true,
    },
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  },
];

const VendorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const vendor = vendors.find((v) => v.id === Number(id));

  if (!vendor) {
    return <p className="p-6 text-red-600 font-semibold">Vendor not found</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        {/* Image */}
        <img
          src={vendor.image}
          alt={vendor.name}
          className="h-64 w-full object-cover rounded-lg"
        />

        {/* Basic Info */}
        <div>
          <h1 className="text-2xl font-bold">{vendor.name}</h1>
          <p className="text-gray-500">
            {vendor.city} • {vendor.cuisine}
          </p>
        </div>

        {/* Profile Completion */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Profile Completion</span>
            <span>{vendor.completion}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-600 h-2 rounded-full font-bold"
              style={{ width: `${vendor.completion}%` }}
            />
          </div>
        </div>

        {/* Vendor Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><b>Owner:</b> {vendor.owner}</p>
          <p><b>Phone:</b> {vendor.phone}</p>
          <p><b>Email:</b> {vendor.email}</p>
          <p><b>Address:</b> {vendor.address}</p>
          <p><b>Opening Hours:</b> {vendor.openingHours}</p>
        </div>

        {/* Bank Details */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Bank Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><b>Account Name:</b> {vendor.bank.accountName}</p>
            <p><b>Account No:</b> {vendor.bank.accountNumber}</p>
            <p><b>IFSC:</b> {vendor.bank.ifsc}</p>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Documents</h2>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {Object.entries(vendor.documents).map(([doc, status]) => (
              <span
                key={doc}
                className={`px-3 py-2 rounded-lg text-center font-medium ${
                  status
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "bg-red-100 text-red-700 font-semibold"
                }`}
              >
                {doc.toUpperCase()} : {status ? "Verified" : "Pending"}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={() => navigate(`/approve-reject/${vendor.id}`)}
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold"
          >
            Approve / Reject
          </button>

          <button
            onClick={() => navigate(`/compliances/${vendor.id}`)}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Verify Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;

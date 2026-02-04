import { CheckCircle, FileText, Clock, ShieldCheck } from "lucide-react";

const vendor = {
  name: "Spice Hub",
  city: "Bangalore",
  owner: "Rahul Sharma",
};

const documents = [
  {
    title: "FSSAI License",
    number: "12345678901234",
    expiry: "2026-03-15",
    status: "Verified",
  },
  {
    title: "GST Certificate",
    number: "23CZGPP9263D1Z8",
    expiry: "—",
    status: "Verified",
  },
  {
    title: "Business Ownership Proof",
    number: "Shop & Establishment Act",
    expiry: "—",
    status: "Pending",
  },
];

const auditLogs = [
  {
    admin: "Super Admin",
    action: "Verified FSSAI License",
    time: "25 Jan 2026 • 11:42 AM",
  },
  {
    admin: "Support Admin",
    action: "Requested GST clarification",
    time: "24 Jan 2026 • 04:10 PM",
  },
];

const VendorCompliance = () => {
  return (
    
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Vendor Compliance & Verification
          </h1>
          <p className="text-sm text-gray-500">
            {vendor.name} • {vendor.owner} • {vendor.city}
          </p>
        </div>

        {/* LEGAL DOCS */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="flex items-center gap-2 font-semibold mb-4">
            <ShieldCheck className="text-blue-600" />
            Legal & Regulatory Compliance
          </h2>

          <div className="space-y-4">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{doc.title}</h3>
                  <p className="text-sm text-gray-500">
                    Number: {doc.number}
                  </p>
                  {doc.expiry !== "—" && (
                    <p className="text-sm text-gray-500">
                      Expiry: {doc.expiry}
                    </p>
                  )}
                </div>

                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    doc.status === "Verified"
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "bg-yellow-100 text-yellow-700 font-semibold"
                  }`}
                >
                  {doc.status === "Verified" ? (
                    <CheckCircle size={16} />
                  ) : (
                    <Clock size={16} />
                  )}
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIT LOGS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="flex items-center gap-2 font-semibold mb-4">
            <FileText className="text-purple-600" />
            Audit Logs
          </h2>

          <div className="space-y-3">
            {auditLogs.map((log, idx) => (
              <div key={idx} className="border rounded-lg p-3">
                <p className="font-medium">{log.admin}</p>
                <p className="text-sm text-gray-500">{log.action}</p>
                <p className="text-xs text-gray-400">{log.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  
  );
};

export default VendorCompliance;

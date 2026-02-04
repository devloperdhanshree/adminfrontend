import { useState } from "react";
import { CheckCircle, XCircle, Mail, CreditCard } from "lucide-react";

const rejectionReasons = [
  "Incomplete Documents",
  "Invalid License",
  "Service Area Not Covered",
  "Incorrect Business Details",
  "Other",
];

const VendorFinalDecision = () => {
  const [decision, setDecision] = useState(null); // approved | rejected
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleApprove = () => {
    setDecision("approved");
    setReason("");
    setFeedback("");
  };

  const handleReject = () => {
    if (!reason || !feedback) {
      alert("Please select a reason and provide feedback.");
      return;
    }
    setDecision("rejected");
  };

  const statusBadge = () => {
    if (decision === "approved") {
      return (
        <span className="px-4 py-1 rounded-full text-sm bg-green-100 text-green-700 font-semibold">
          Approved
        </span>
      );
    }
    if (decision === "rejected") {
      return (
        <span className="px-4 py-1 rounded-full text-sm bg-red-100 text-red-700 font-semibold">
          Rejected
        </span>
      );
    }
    return (
      <span className="px-4 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 font-semibold">
        Under Review
      </span>
    );
  };

  return (
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Vendor Final Review
          </h1>
          <p className="text-sm text-gray-500">
            Approve or reject vendor application
          </p>
        </div>

        {/* VENDOR SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Spice Hub
              </h2>
              <p className="text-sm text-gray-500">
                Owner: Rahul Sharma • North Indian • Bangalore
              </p>
            </div>
            {statusBadge()}
          </div>
        </div>

        {/* ACTION PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* APPROVE CARD */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Approve Vendor
              </h3>
            </div>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CreditCard size={16} />
                Trigger Vendor Subscription & Fee Collection
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                Send Welcome Email with Login Credentials
              </li>
            </ul>

            <button
              onClick={handleApprove}
              disabled={decision !== null}
              className={`w-full py-2 rounded-lg transition text-white ${
                decision
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Approve Vendor
            </button>
          </div>

          {/* REJECT CARD */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="text-red-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Reject Vendor
              </h3>
            </div>

            {/* REASON */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Rejection Reason
              </label>
              <select
                value={reason}
                disabled={decision !== null}
                onChange={(e) => setReason(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              >
                <option value="">Select reason</option>
                {rejectionReasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* FEEDBACK */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Feedback for Vendor
              </label>
              <textarea
                rows={4}
                value={feedback}
                disabled={decision !== null}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Explain what needs to be corrected..."
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
              />
            </div>

            <button
              onClick={handleReject}
              disabled={decision !== null}
              className={`w-full py-2 rounded-lg transition text-white ${
                decision
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Reject Application
            </button>
          </div>
        </div>

        {/* RESULT STATUS */}
        {decision && (
          <div
            className={`mt-6 p-4 rounded-lg text-sm ${
              decision === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {decision === "approved" ? (
              <>
                ✅ Vendor approved. Subscription initiated and welcome email
                sent.
              </>
            ) : (
              <>
                ❌ Vendor rejected. Feedback sent for re-application.
              </>
            )}
          </div>
        )}
      </div>
  
  );
};

export default VendorFinalDecision;

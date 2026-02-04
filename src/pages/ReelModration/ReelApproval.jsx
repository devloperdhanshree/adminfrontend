import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

const reels = [
  {
    id: 1,
    uploader: "Spice Hub (Vendor)",
    food: "Chicken Biryani",
    caption: "#biryani #foodreel",
  },
  {
    id: 2,
    uploader: "User_ankit23",
    food: "Cheese Pizza",
    caption: "#pizza #cheeselover",
  },
  {
    id: 3,
    uploader: "Italiano (Vendor)",
    food: "Pasta Alfredo",
    caption: "#pasta #italianfood",
  },
];

const rejectionReasons = [
  "Poor Video Quality",
  "Inappropriate / Non-Food Content",
  "Watermarks from Other Apps",
  "Violation of Community Guidelines",
];

const ReelApproval = () => {
  const [selected, setSelected] = useState([]);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelected(reels.map((r) => r.id));
  };

  const clearAll = () => {
    setSelected([]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Approve / Reject Reels
        </h1>
        <p className="text-sm text-gray-500">
          Final moderation before reels go live
        </p>
      </div>

      {/* BULK ACTIONS */}
      <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-wrap items-center gap-4">
        <button
          onClick={selectAll}
          className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
        >
          Select All
        </button>

        <button
          onClick={clearAll}
          className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
        >
          Clear Selection
        </button>

        <button
          disabled={!selected.length}
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <CheckCircle size={18} />
          Approve Selected
        </button>

        <button
          disabled={!selected.length}
          onClick={() => setShowRejectModal(true)}
          className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          <XCircle size={18} />
          Reject Selected
        </button>
      </div>

      {/* REELS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selected.includes(reel.id)}
                onChange={() => toggleSelect(reel.id)}
                className="mt-1 accent-blue-600"
              />

              <div>
                <h3 className="font-semibold text-gray-800">
                  {reel.food}
                </h3>
                <p className="text-sm text-gray-500">
                  {reel.uploader}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  {reel.caption}
                </p>
              </div>
            </div>

            {/* SINGLE ACTIONS */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <CheckCircle size={16} />
                Approve
              </button>

              <button
                onClick={() => setShowRejectModal(true)}
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <XCircle size={16} />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* REJECT MODAL */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-600" />
              <h2 className="text-lg font-semibold">
                Reason for Rejection
              </h2>
            </div>

            <label className="text-sm text-gray-600">
              Select Reason <span className="text-red-500">*</span>
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full mt-1 mb-4 border rounded-lg p-2 text-sm"
            >
              <option value="">-- Select Reason --</option>
              {rejectionReasons.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>

            <label className="text-sm text-gray-600">
              Additional Feedback
            </label>
            <textarea
              rows="3"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2 text-sm"
              placeholder="Optional explanation for uploader..."
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowRejectModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                disabled={!reason}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelApproval;

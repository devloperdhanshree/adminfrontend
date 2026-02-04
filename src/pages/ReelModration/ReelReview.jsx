import { useState } from "react";
import { CheckCircle, XCircle, Volume2, VolumeX } from "lucide-react";

const ReelReview = () => {
  const [audioOn, setAudioOn] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Review Food Reel
        </h1>
        <p className="text-sm text-gray-500">
          Moderate user & vendor generated video content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* VIDEO PLAYER */}
        <div className="lg:col-span-1 bg-black rounded-xl shadow overflow-hidden">
          <div className="aspect-[9/16] w-full">
            <video
              className="w-full h-full object-cover"
              controls
              muted={!audioOn}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
            </video>
          </div>

          {/* Audio Toggle */}
          <div className="p-3 bg-gray-900 flex justify-between items-center">
            <span className="text-sm text-gray-300">
              Audio Check
            </span>
            <button
              onClick={() => setAudioOn(!audioOn)}
              className="flex items-center gap-2 text-white text-sm"
            >
              {audioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
              {audioOn ? "Audio On" : "Muted"}
            </button>
          </div>
        </div>

        {/* DETAILS & AUDIT */}
        <div className="lg:col-span-2 space-y-6">
          {/* METADATA */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Content Metadata
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500">Uploader:</span>{" "}
                <span className="font-medium text-gray-800">
                  Spice Hub (Vendor)
                </span>
              </p>
              <p>
                <span className="text-gray-500">Food Item:</span>{" "}
                <span className="font-medium text-gray-800">
                  Chicken Biryani
                </span>
              </p>
              <p>
                <span className="text-gray-500">Caption:</span>{" "}
                <span className="text-gray-700">
                  Authentic Hyderabadi Biryani 🔥🍗
                </span>
              </p>
              <p className="text-blue-600">
                #biryani #foodreels #spicehub
              </p>
            </div>
          </div>

          {/* VISUAL QUALITY AUDIT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Visual Quality Audit
            </h2>

            <div className="space-y-3 text-sm">
              {[
                "High-resolution & clear video",
                "Food-focused & relevant to delivery",
                "No prohibited or misleading content",
              ].map((item, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-green-600"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* APPROVE / REJECT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Final Decision
            </h2>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <CheckCircle size={18} />
                Approve Reel
              </button>

              <button className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                <XCircle size={18} />
                Reject Reel
              </button>
            </div>

            {/* Rejection Reason (optional future use) */}
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Rejection Reason (optional)
              </label>
              <textarea
                rows="3"
                className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Explain why the reel was rejected..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelReview;

import { useState } from "react";

// Dummy data for demonstration
const dummyDrivers = [
  { id: 1, name: "Rahul Sharma", status: "Active", vehicle: "Bike" },
  { id: 2, name: "Anita Verma", status: "Inactive", vehicle: "Car" },
  { id: 3, name: "Suresh Patil", status: "Active", vehicle: "Van" },
];

const dummyZones = [
  { name: "Vijay Nagar", drivers: [] },
  { name: "Palasia", drivers: [] },
  { name: "Indore City Center", drivers: [] },
];

export default function DeliveryManagement() {
  const [activeTab, setActiveTab] = useState("add"); // tabs: add, assign, track
  const [drivers, setDrivers] = useState(dummyDrivers);
  const [zones, setZones] = useState(dummyZones);
  const [draggedDriver, setDraggedDriver] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicleType: "",
    licenseNumber: "",
    availability: false,
    kycDocuments: null,
  });

  // -------------------- Add Delivery Boy --------------------
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") setFormData({ ...formData, [name]: checked });
    else if (type === "file") setFormData({ ...formData, [name]: files });
    else setFormData({ ...formData, [name]: value });
  };

  const handleAddDriver = (e) => {
    e.preventDefault();
    const newDriver = {
      id: drivers.length + 1,
      name: formData.name,
      status: formData.availability ? "Active" : "Inactive",
      vehicle: formData.vehicleType,
    };
    setDrivers([...drivers, newDriver]);
    setFormData({
      name: "",
      contact: "",
      vehicleType: "",
      licenseNumber: "",
      availability: false,
      kycDocuments: null,
    });
  };

  // -------------------- Assign Areas --------------------
  const handleDragStart = (driver) => setDraggedDriver(driver);

  const handleDrop = (zoneName) => {
    if (!draggedDriver) return;

    // Remove from previous zone
    setZones((prevZones) =>
      prevZones.map((zone) => ({
        ...zone,
        drivers: zone.drivers.filter((d) => d.id !== draggedDriver.id),
      }))
    );

    // Add to new zone
    setZones((prevZones) =>
      prevZones.map((zone) =>
        zone.name === zoneName
          ? { ...zone, drivers: [...zone.drivers, draggedDriver] }
          : zone
      )
    );
    setDraggedDriver(null);
  };

  // -------------------- Track Live Locations --------------------
  // Dummy telemetry data
  const telemetry = drivers.map((driver, idx) => ({
    ...driver,
    speed: Math.floor(Math.random() * 50 + 20), // km/h
    eta: Math.floor(Math.random() * 30 + 10), // minutes
    battery: Math.floor(Math.random() * 40 + 60), // %
    status: Math.random() > 0.5 ? "On-Trip" : "Idle",
    lat: 22.7196 + Math.random() / 100,
    lng: 75.8577 + Math.random() / 100,
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Delivery Boy Management
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("add")}
          className={`px-4 py-2 rounded ${
            activeTab === "add"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          Add Delivery Boys
        </button>
        <button
          onClick={() => setActiveTab("assign")}
          className={`px-4 py-2 rounded ${
            activeTab === "assign"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          Assign Areas
        </button>
        <button
          onClick={() => setActiveTab("track")}
          className={`px-4 py-2 rounded ${
            activeTab === "track"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          Track Live Locations
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {/* -------------------- Add Delivery Boys Tab -------------------- */}
        {activeTab === "add" && (
          <div className="bg-white shadow rounded-lg p-6 max-w-3xl">
            <form onSubmit={handleAddDriver} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select Vehicle</option>
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                  <option value="Van">Van</option>
                </select>
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="License Number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Upload KYC Documents
                </label>
                <input
                  type="file"
                  name="kycDocuments"
                  onChange={handleChange}
                  multiple
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availability"
                  checked={formData.availability}
                  onChange={handleChange}
                  id="availability"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="availability" className="ml-2">
                  Active Status
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add Delivery Boy
              </button>
            </form>
          </div>
        )}

        {/* -------------------- Assign Areas Tab -------------------- */}
        {activeTab === "assign" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Available Drivers */}
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Available Drivers</h2>
              <ul>
                {drivers.map((driver) => (
                  <li
                    key={driver.id}
                    draggable
                    onDragStart={() => handleDragStart(driver)}
                    className="p-2 mb-2 border border-gray-300 rounded cursor-move hover:bg-gray-50"
                  >
                    {driver.name} ({driver.vehicle})
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div className="space-y-4">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(zone.name)}
                  className="bg-white shadow rounded-lg p-4 min-h-[100px]"
                >
                  <h3 className="text-lg font-semibold mb-2">{zone.name}</h3>
                  <ul>
                    {zone.drivers.length > 0 ? (
                      zone.drivers.map((driver) => (
                        <li
                          key={driver.id}
                          className="p-2 mb-2 border border-gray-300 rounded bg-gray-50"
                        >
                          {driver.name}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-400">No drivers assigned</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------- Track Live Locations Tab -------------------- */}
        {activeTab === "track" && (
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white shadow rounded-lg h-96 flex items-center justify-center text-gray-400">
              Map Placeholder (Integrate Google Maps/Mapbox here)
            </div>

            {/* Telemetry Table */}
            <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
              <h2 className="text-xl font-semibold mb-4">Live Driver Telemetry</h2>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Driver</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Speed (km/h)</th>
                    <th className="border px-4 py-2">ETA (min)</th>
                    <th className="border px-4 py-2">Battery (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {telemetry.map((d) => (
                    <tr key={d.id}>
                      <td className="border px-4 py-2">{d.name}</td>
                      <td className="border px-4 py-2">{d.status}</td>
                      <td className="border px-4 py-2">{d.speed}</td>
                      <td className="border px-4 py-2">{d.eta}</td>
                      <td className="border px-4 py-2">{d.battery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

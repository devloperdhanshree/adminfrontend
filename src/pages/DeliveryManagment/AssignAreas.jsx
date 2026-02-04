import { useState } from "react";
import AdminLayout from "../../Components/Layout/AdminLayout.jsx";
export default function AssignAreas() {
  const [zones, setZones] = useState([
    { name: "Vijay Nagar", drivers: [] },
    { name: "Palasia", drivers: [] },
    { name: "Indore City Center", drivers: [] },
  ]);

  const [drivers, setDrivers] = useState([
    { id: 1, name: "Rahul Sharma" },
    { id: 2, name: "Anita Verma" },
    { id: 3, name: "Suresh Patil" },
  ]);

  const [draggedDriver, setDraggedDriver] = useState(null);

  const handleDragStart = (driver) => {
    setDraggedDriver(driver);
  };

  const handleDrop = (zoneName) => {
    if (draggedDriver) {
      // Remove driver from previous zone if assigned
      setZones((prevZones) =>
        prevZones.map((zone) => ({
          ...zone,
          drivers: zone.drivers.filter((d) => d.id !== draggedDriver.id),
        }))
      );

      // Add driver to new zone
      setZones((prevZones) =>
        prevZones.map((zone) =>
          zone.name === zoneName
            ? { ...zone, drivers: [...zone.drivers, draggedDriver] }
            : zone
        )
      );

      setDraggedDriver(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Assign Areas</h1>

      {/* Map Placeholder */}
      <div className="bg-white shadow rounded-lg mb-6 h-64 flex items-center justify-center text-gray-400">
        Map Placeholder (Integrate Google Maps or Leaflet here)
      </div>

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
                {driver.name}
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
              className="bg-white shadow rounded-lg p-4 min-h-[100px] flex flex-col"
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

      {/* Instruction */}
      <p className="mt-6 text-gray-500 text-sm">
        Drag and drop drivers into zones to assign them.
      </p>
    </div>
  );
}

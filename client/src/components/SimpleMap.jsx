import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet marker icons
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// 👇 Helper to fly to selected marker
const FlyToLocation = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom || 15, { duration: 1.5 });
    }
  }, [position, zoom, map]);
  return null;
};

// 👇 Helper to fit map bounds on first load
const FitAllMarkers = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);
  return null;
};

export default function SimpleMap() {
  const locations = [
  { lat: 23.3441, lng: 85.3096, name: "Ranchi, Jharkhand" },
  { lat: 18.9389, lng: 72.8258, name: "Mumbai, Maharashtra" },
  { lat: 51.4419, lng: 0.3708, name: "Gravesend, Kent, United Kingdom" }
]


  const [selectedPosition, setSelectedPosition] = useState(null);

  // Compute bounds from all locations
  const bounds = locations.map((loc) => [loc.lat, loc.lng]);

  return (
    <div className="flex flex-col md:flex-row  w-11/12 py-6">
      {/* Left Column */}
      <div className="w-full mx-auto md:w-1/4 mx-a bg-white  rounded-2xl p-6 border border-gray-100 md:rounded-r-none">
        <div className="mb-5">
          <h2 className="text-5xl  text-black flex items-center gap-2">
             Our Global Presence
          </h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            We're expanding worldwide! Click on a location below to zoom into that office and explore our global reach.
          </p>
        </div>

        <ul className="space-y-3 mt-4">
          {locations.map((loc, index) => {
            const isActive =
              selectedPosition?.[0] === loc.lat &&
              selectedPosition?.[1] === loc.lng;
            return (
              <li
                key={index}
                onClick={() => setSelectedPosition([loc.lat, loc.lng])}
                className={`text-base font-medium cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#0070c0]/10 text-[#0070c0] font-semibold ring-1 ring-[#0070c0]"
                    : "text-gray-700 hover:text-[#0070c0] hover:bg-gray-50"
                }`}
              >
                 {loc.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Column - Map */}
      <div className="w-full  md:w-2/3 h-[50vh] rounded-lg overflow-hidden shadow-lg md:rounded-l-none">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          {/* 👇 Fly to selected marker */}
          {selectedPosition && (
            <FlyToLocation position={selectedPosition} zoom={5} />
          )}

          {/* 👇 Fit all markers on initial load */}
          {!selectedPosition && <FitAllMarkers bounds={bounds} />}

          {/* 🌐 Custom map tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {locations.map((loc, index) => (
            <Marker key={index} position={[loc.lat, loc.lng]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

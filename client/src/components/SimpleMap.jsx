import React, { useState, useEffect, useRef } from "react";
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

// Fly to selected marker
const FlyToLocation = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom || 5, { duration: 1.5 });
    }
  }, [position, zoom, map]);
  return null;
};

// Fit map to all markers initially
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
  const data = [
    {
      continent: "Asia",
      countries: [
        {
          name: "India",
          locations: [
            {
              name: "Corporate Office (Ranchi)",
              lat: 23.3441,
              lng: 85.3096,
              fulladd:
                "Software Technology Parks of India, Namkum Industrial Area, Namkum, Ranchi - 834010, Jharkhand, India.",
            },
            {
              name: "Mumbai Office",
              lat: 18.9389,
              lng: 72.8258,
              fulladd:
                "Plot-58, Laxmi Bhuvan, D Road, Wankhede Stadium, Churchgate, Mumbai - 400020, Maharashtra, India.",
            },
          ],
        },
      ],
    },
    {
      continent: "Europe",
      countries: [
        {
          name: "United Kingdom",
          locations: [
            {
              name: "London",
              lat: 51.4419,
              lng: 0.3708,
              fulladd:
                "138 SingleWell Road, Gravesend Kent, Da11 7px, United Kingdom.",
            },
          ],
        },
      ],
    },
  ];

  const allLocations = data.flatMap((cont) =>
    cont.countries.flatMap((c) => c.locations)
  );
  const bounds = allLocations.map((loc) => [loc.lat, loc.lng]);

  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [openContinent, setOpenContinent] = useState(null);
  const [openCountry, setOpenCountry] = useState(null);

  const containerRef = useRef(null);

  const handleLocationClick = (lat, lng, index) => {
    setSelectedPosition([lat, lng]);
    setSelectedIndex(index);
  };

  // Close dropdown on outside click and reset map
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenCountry(null);
        setSelectedPosition(null);
        setSelectedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Remove white tile backgrounds */
          .leaflet-tile {
            background-color: transparent !important;
          }
          .leaflet-container {
            background: transparent !important;
          }
        `}
      </style>

      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-1 rounded-2xl border border-gray-100 overflow-hidden"
        >
          {/* Left Column - Nested Dropdown */}
          <div className="w-full lg:w-1/3 xl:w-1/4 p-4 sm:p-6 bg-[#0070c0]">
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white font-normal">
                Our Presence
              </h2>
              <hr className="w-[90%] text-white/10 mx-auto mt-2" />
            </div>

            <ul className="space-y-3">
              {data.map((continent, cIndex) => (
                <li key={cIndex}>
                  <div
                    onClick={() =>
                      setOpenContinent(openContinent === cIndex ? null : cIndex)
                    }
                    className="cursor-pointer text-lg text-white px-3 py-2 bg-[#005999]/10 rounded-md flex justify-between"
                  >
                    {continent.continent}
                    <span>{openContinent === cIndex ? "▲" : "▼"}</span>
                  </div>
                  {openContinent === cIndex && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {continent.countries.map((country, countryIndex) => (
                        <li key={countryIndex}>
                          <div
                            onClick={() =>
                              setOpenCountry(
                                openCountry === `${cIndex}-${countryIndex}`
                                  ? null
                                  : `${cIndex}-${countryIndex}`
                              )
                            }
                            className="cursor-pointer text-white text-md font-medium px-3 py-2 bg-[#006bb3]/10 rounded-md flex justify-between border-2"
                          >
                            {country.name}
                            <span>
                              {openCountry === `${cIndex}-${countryIndex}`
                                ? "▲"
                                : "▼"}
                            </span>
                          </div>
                          {openCountry === `${cIndex}-${countryIndex}` && (
                            <ul className="ml-4 mt-2 space-y-1 text-md">
                              {country.locations.map((loc, locIndex) => {
                                const indexKey = `${cIndex}-${countryIndex}-${locIndex}`;
                                return (
                                  <li key={locIndex}>
                                    <div
                                      onClick={() =>
                                        handleLocationClick(
                                          loc.lat,
                                          loc.lng,
                                          indexKey
                                        )
                                      }
                                      className={`text-sm cursor-pointer px-3  py-2 border-1 rounded-lg ${
                                        selectedIndex === indexKey
                                          ? "bg-white text-[#0070c0] font-bold"
                                          : "text-gray-100 hover:bg-gray-100 hover:text-[#0070c0]"
                                      }`}
                                    >
                                      {loc.name}
                                    </div>
                                    {selectedIndex === indexKey && (
                                      <p className="text-xs text-gray-200 mt-1 ml-3 leading-relaxed">
                                        {loc.fulladd}
                                      </p>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Map */}
          <div className="w-full lg:w-2/3 xl:w-3/4 h-64 sm:h-80 md:h-96 lg:h-[50vh] min-h-[300px]">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
            >
              {selectedPosition && (
                <FlyToLocation position={selectedPosition} zoom={5} />
              )}
              {!selectedPosition && <FitAllMarkers bounds={bounds} />}

              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />

              {allLocations.map((loc, index) => (
                <Marker key={index} position={[loc.lat, loc.lng]}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}

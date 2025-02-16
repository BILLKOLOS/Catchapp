import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import NormalNav from '../components/NormalNav';
import BottomNav from '../components/HomeNavBottom';

// Custom marker icon creation function
const createColoredIcon = (color) => {
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
      <ellipse cx="12" cy="34" rx="4" ry="2" fill="rgba(0,0,0,0.3)" />
      <path d="M12 0C7.031 0 3 4.031 3 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.969-4.031-9-9-9z" fill="${color}" />
      <circle cx="12" cy="9" r="4" fill="white" />
    </svg>`),
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  });
};

// Create different colored markers for different types of locations
const icons = {
  start: createColoredIcon('#22C55E'),    // Green for start
  checkpoint: createColoredIcon('#3B82F6'), // Blue for checkpoints
  end: createColoredIcon('#EF4444')       // Red for end
};

const EventRoute = () => {
  const locations = [
    {
      position: [-1.0398, 37.0827],
      name: "Thika Makongeni",
      type: "start",
      description: "Starting point of the event"
    },
    {
      position: [-1.0420, 37.0900],
      name: "Checkpoint 1",
      type: "checkpoint",
      description: "First rest stop - Water station"
    },
    {
      position: [-1.0450, 37.0950],
      name: "Checkpoint 2",
      type: "checkpoint",
      description: "Second rest stop - Medical station"
    },
    {
      position: [-1.0500, 37.1000],
      name: "Final Destination",
      type: "end",
      description: "Event finish line"
    }
  ];

  const route = locations.map(loc => loc.position);

  const getMarkerColor = (type) => {
    switch (type) {
      case 'start': return 'bg-green-500';
      case 'checkpoint': return 'bg-blue-500';
      case 'end': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen"> {/* Changed to dark blue */}
      <NormalNav />

      {/* Event Route Header */}
      <div className="bg-[#272222] rounded-full px-6 py-2 text-center mt-20 max-w-[200px] mx-auto text-white">
        Event Route
      </div>

      {/* Main Map Content */}
      <div className="relative p-4">
        <div className="bg-[#0a2955] max-w-[967px] mx-auto rounded-3xl p-4 shadow-lg"> {/* Changed to darker blue */}
          {/* Location List */}
          <div className="bg-[#051630] rounded-2xl p-4 mb-4"> {/* Changed to darkest blue */}
            <div className="flex flex-wrap gap-2">
              {locations.map((loc, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 text-white px-3 py-1 bg-[#102a56] rounded-full" /* Changed to medium blue */
                >
                  <div className={`w-2 h-2 rounded-full ${getMarkerColor(loc.type)}`} />
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-[467px] rounded-2xl overflow-hidden">
            <MapContainer
              center={locations[0].position}
              zoom={14}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%', background: '#051630' }}
            >
              {/* Dark themed TileLayer - using a more blue-tinted map style */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              />

              {/* Markers for each location */}
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={loc.position}
                  icon={icons[loc.type]}
                >
                  <Popup className="text-black">
                    <div className="font-semibold">{loc.name}</div>
                    <div className="text-sm">{loc.description}</div>
                  </Popup>
                </Marker>
              ))}

              {/* Route line */}
              <Polyline
                positions={route}
                pathOptions={{
                  color: '#3B82F6',
                  weight: 3,
                  opacity: 0.7,
                  dashArray: '10, 10'
                }}
              />
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="mt-4 bg-[#051630] rounded-xl p-3"> {/* Changed to darkest blue */}
            <div className="flex flex-wrap gap-4 justify-center text-white text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Start Point</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Checkpoint</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span>End Point</span>
              </div>
            </div>
          </div>

          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default EventRoute;
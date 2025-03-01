import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NormalNav from '../components/NormalNav';
import BottomNav from '../components/HomeNavBottom';

// We need to handle Leaflet icon imports differently for SSR/Vercel
const EventRoute = () => {
  // Set up Leaflet icons after component mounts (client-side only)
  useEffect(() => {
    import('leaflet').then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
  
      window.createColoredIcon = (color) => {
        return new L.Icon({
          iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
      };
  
      window.leafletIcons = {
        start: window.createColoredIcon('green'),
        checkpoint: window.createColoredIcon('blue'),
        end: window.createColoredIcon('red')
      };
    });
  }, []);
  
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
  
  // Conditional rendering to ensure map only renders on client side
  const [isClient, setIsClient] = React.useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">
      <NormalNav />

      {/* Event Route Header */}
      <div className="bg-[#272222] rounded-full px-6 py-2 text-center mt-20 max-w-[200px] mx-auto text-white">
        Event Route
      </div>

      {/* Main Map Content */}
      <div className="relative p-4">
        <div className="bg-[#0a2955] max-w-[967px] mx-auto rounded-3xl p-4 shadow-lg">
          {/* Location List */}
          <div className="bg-[#051630] rounded-2xl p-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {locations.map((loc, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 text-white px-3 py-1 bg-[#102a56] rounded-full"
                >
                  <div className={`w-2 h-2 rounded-full ${getMarkerColor(loc.type)}`} />
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container - only rendered on client side */}
          <div className="w-full h-[467px] rounded-2xl overflow-hidden">
            {isClient ? (
              <MapContainer
                center={locations[0].position}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%', background: '#051630' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Markers for each location */}
                {locations.map((loc, index) => (
                  <Marker
                    key={index}
                    position={loc.position}
                    icon={window.leafletIcons ? window.leafletIcons[loc.type] : null}
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
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-[#051630] text-white">
                Loading map...
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 bg-[#051630] rounded-xl p-3">
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
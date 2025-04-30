import { useEffect, useState } from 'react';
import NormalNav from '../components/NormalNav';
import BottomNav from '../components/HomeNavBottom';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const EventRoute = () => {
  const [MapComponents, setMapComponents] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Leaflet components on client side only
    if (typeof window !== 'undefined') {
      import('react-leaflet').then((components) => {
        // Fix for default marker icons
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setMapComponents({
          MapContainer: components.MapContainer,
          TileLayer: components.TileLayer,
          Marker: components.Marker,
          Popup: components.Popup,
          Polyline: components.Polyline
        });
      });
    }
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

  // Custom icon creation
  const createColoredIcon = (color) => {
    return new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  };

  return (
    <div className="min-h-[100vh]">
      <NormalNav />

      {/* Event Route Header */}
      <div className="bg-[#272222] rounded-full px-6 py-2 text-center mt-16 max-w-[200px] mx-auto text-white">
        Event Route
      </div>

      {/* Main Map Content */}
      <div className="relative p-2">
        <div className="bg-[#272222] max-w-[900px] mx-auto rounded-3xl p-4 shadow-lg">
          {/* Location List */}
          <div className="bg-[#272222] rounded-2xl p-3 mb-3">
            <div className="flex flex-wrap gap-2">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white px-3 py-1 bg-[#272222] rounded-full border border-gray-600"
                >
                  <div className={`w-2 h-2 rounded-full ${getMarkerColor(loc.type)}`} />
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container - only rendered on client side */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-gray-700">
            {isClient && MapComponents ? (
              <MapComponents.MapContainer
                center={locations[0].position}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%', background: '#272222' }}
              >
                <MapComponents.TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                {/* Markers for each location */}
                {locations.map((loc, index) => {
                  const icon = createColoredIcon(
                    loc.type === 'start' ? 'green' :
                    loc.type === 'checkpoint' ? 'blue' :
                    loc.type === 'end' ? 'red' : 'gray'
                  );
                  
                  return (
                    <MapComponents.Marker
                      key={index}
                      position={loc.position}
                      icon={icon}
                    >
                      <MapComponents.Popup className="text-black">
                        <div className="font-semibold">{loc.name}</div>
                        <div className="text-sm">{loc.description}</div>
                      </MapComponents.Popup>
                    </MapComponents.Marker>
                  );
                })}

                {/* Route line */}
                <MapComponents.Polyline
                  positions={route}
                  pathOptions={{
                    color: '#3B82F6',
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 10'
                  }}
                />
              </MapComponents.MapContainer>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-[#272222] text-white">
                Loading map...
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-3 bg-[#272222] rounded-xl p-3 border border-gray-700">
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
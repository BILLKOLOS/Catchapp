import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

const Map = () => {
  // Sample locations - replace with your actual locations
  const locations = [
    {
      position: [-1.1457049, 36.9648526], // Center point from your iframe
      name: "Main Location",
      type: "start",
      description: "Starting point"
    },
    {
      position: [-1.1457, 36.9670],
      name: "Checkpoint 1",
      type: "checkpoint",
      description: "First checkpoint"
    },
    {
      position: [-1.1470, 36.9660],
      name: "Final Point",
      type: "end",
      description: "Destination"
    }
  ];

  const route = locations.map(loc => loc.position);

  return (
    <div className="">
      <div className="md:w-full lg:w-[515px] h-[348px] lg:h-[318px] bg-gray-800 rounded-[30px] overflow-hidden">
        <MapContainer
          center={locations[0].position}
          zoom={15}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Dark themed map tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />

          {/* Markers */}
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
    </div>
  );
};

export default Map;
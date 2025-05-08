import { useEffect, useRef, useState } from "react"
import NormalNav from "../components/NormalNav"
import BottomNav from "../components/HomeNavBottom"
import "ol/ol.css"
import { Map as OLMap, View } from "ol"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import { fromLonLat } from "ol/proj"
import { Feature } from "ol"
import { Point, LineString } from "ol/geom"
import { Vector as VectorLayer } from "ol/layer"
import { Vector as VectorSource } from "ol/source"
import { Style, Fill, Stroke, Circle, Text } from "ol/style"
import Overlay from "ol/Overlay"
import { defaults as defaultControls } from "ol/control"

const EventRoute = () => {
  const mapRef = useRef(null)
  const mapElement = useRef(null)
  const popupElement = useRef(null)
  const popupContentElement = useRef(null)
  const popupCloserElement = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  // Event locations
  const locations = [
    {
      position: [37.0827, -1.0398],
      name: "Thika Makongeni",
      type: "start",
      description: "Starting point of the event",
    },
    {
      position: [37.09, -1.042],
      name: "Checkpoint 1",
      type: "checkpoint",
      description: "First rest stop - Water station",
    },
    {
      position: [37.095, -1.045],
      name: "Checkpoint 2",
      type: "checkpoint",
      description: "Second rest stop - Medical station",
    },
    {
      position: [37.1, -1.05],
      name: "Final Destination",
      type: "end",
      description: "Event finish line",
    },
  ]

  const getMarkerColor = (type) => {
    switch (type) {
      case "start":
        return "#22C55E" // Green
      case "checkpoint":
        return "#3B82F6" // Blue
      case "end":
        return "#EF4444" // Red
      default:
        return "#6B7280" // Gray
    }
  }

  useEffect(() => {
    if (!mapElement.current) return

    setLoading(true)

    // Create popup overlay
    const popup = new Overlay({
      element: popupElement.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    })

    // Create vector source for markers
    const markersSource = new VectorSource()

    // Create vector source for route
    const routeSource = new VectorSource()

    // Create vector layer for markers
    const markersLayer = new VectorLayer({
      source: markersSource,
      style: (feature) => {
        const type = feature.get("type")
        return new Style({
          image: new Circle({
            radius: 8,
            fill: new Fill({ color: getMarkerColor(type) }),
            stroke: new Stroke({ color: "#ffffff", width: 2 }),
          }),
          text: new Text({
            text: feature.get("name"),
            offsetY: -15,
            font: "12px Calibri,sans-serif",
            fill: new Fill({ color: "#fff" }),
            stroke: new Stroke({
              color: "#000",
              width: 3,
            }),
          }),
        })
      },
    })

    // Create vector layer for route
    const routeLayer = new VectorLayer({
      source: routeSource,
      style: new Style({
        stroke: new Stroke({
          color: "#3B82F6",
          width: 3,
          lineDash: [5, 5],
        }),
      }),
    })

    // Create map
    const map = new OLMap({
      target: mapElement.current,
      layers: [
        // Use standard OpenStreetMap tiles (completely free, no API key needed)
        new TileLayer({
          source: new OSM(),
          className: "dark-map", // We'll apply a CSS filter to make it dark
        }),
        routeLayer,
        markersLayer,
      ],
      controls: defaultControls({ attribution: false, zoom: true }),
      overlays: [popup],
      view: new View({
        center: fromLonLat(locations[0].position),
        zoom: 14,
      }),
    })

    // Add markers for each location
    locations.forEach((loc) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(loc.position)),
        name: loc.name,
        type: loc.type,
        description: loc.description,
      })
      markersSource.addFeature(feature)
    })

    // Add route line
    const routeCoords = locations.map((loc) => fromLonLat(loc.position))
    const routeFeature = new Feature({
      geometry: new LineString(routeCoords),
    })
    routeSource.addFeature(routeFeature)

    // Add click handler for markers
    map.on("click", (evt) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => feature)

      if (feature) {
        const coordinates = feature.getGeometry().getCoordinates()
        const name = feature.get("name")
        const description = feature.get("description")

        popupContentElement.current.innerHTML = `
          <div class="font-semibold">${name}</div>
          <div class="text-sm">${description}</div>
        `

        popup.setPosition(coordinates)
      } else {
        popup.setPosition(undefined)
      }
    })

    // Add pointer cursor for markers
    map.on("pointermove", (e) => {
      const pixel = map.getEventPixel(e.originalEvent)
      const hit = map.hasFeatureAtPixel(pixel)
      map.getViewport().style.cursor = hit ? "pointer" : ""
    })

    // Close popup when clicking the closer button
    popupCloserElement.current.onclick = () => {
      popup.setPosition(undefined)
      popupCloserElement.current.blur()
      return false
    }

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = [position.coords.longitude, position.coords.latitude]
          setUserLocation(userCoords)

          // Add user location marker
          const userFeature = new Feature({
            geometry: new Point(fromLonLat(userCoords)),
            name: "Your Location",
            type: "user",
          })

          // Custom style for user location
          userFeature.setStyle(
            new Style({
              image: new Circle({
                radius: 8,
                fill: new Fill({ color: "#10B981" }),
                stroke: new Stroke({ color: "#ffffff", width: 2 }),
              }),
              text: new Text({
                text: "You",
                offsetY: -15,
                font: "12px Calibri,sans-serif",
                fill: new Fill({ color: "#fff" }),
                stroke: new Stroke({
                  color: "#000",
                  width: 3,
                }),
              }),
            }),
          )

          markersSource.addFeature(userFeature)

          // Add button to center on user location
          const centerOnUserBtn = document.getElementById("center-on-user")
          if (centerOnUserBtn) {
            centerOnUserBtn.addEventListener("click", () => {
              map.getView().animate({
                center: fromLonLat(userCoords),
                zoom: 15,
                duration: 1000,
              })
            })
          }
        },
        (error) => {
          console.error("Error getting user location:", error)
        },
      )
    }

    mapRef.current = map
    setLoading(false)

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(undefined)
      }
    }
  }, [])

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
          <div className="bg-[#1E1A1A] rounded-2xl p-3 mb-3">
            <div className="flex flex-wrap gap-2">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white px-3 py-1 bg-[#2A2424] rounded-full border border-gray-700 shadow-sm hover:bg-[#332D2D] transition-colors"
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getMarkerColor(loc.type) }} />
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-gray-700 relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#272222] bg-opacity-80 z-20">
                <div className="text-white flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2"></div>
                  <div>Loading map...</div>
                </div>
              </div>
            )}
            <div ref={mapElement} className="w-full h-full" />

            {/* Popup overlay */}
            <div
              ref={popupElement}
              className="ol-popup bg-white p-3 rounded-lg shadow-lg max-w-[200px] absolute z-30 hidden"
            >
              <a
                href="#"
                ref={popupCloserElement}
                className="ol-popup-closer absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              >
                ×
              </a>
              <div ref={popupContentElement}></div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-3 bg-[#1E1A1A] rounded-xl p-3 border border-gray-700">
            <div className="flex flex-wrap gap-6 justify-center text-white text-sm">
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
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span>Your Location</span>
              </div>
            </div>
          </div>

          {/* User location info */}
          {userLocation && (
            <div className="mt-3 bg-[#1E1A1A] rounded-xl p-3 border border-gray-700">
              <div className="text-center text-white">
                <p className="text-sm">Your current location is being tracked on the map</p>
                <button
                  id="center-on-user"
                  className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-full text-sm transition-colors"
                >
                  Center on my location
                </button>
              </div>
            </div>
          )}

          <BottomNav />
        </div>
      </div>
    </div>
  )
}

export default EventRoute

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Activity, Coffee, Mic, Upload, X, Tag } from 'lucide-react'
import ServiceProviderSelector from "../components/ServiceProviderSelector"

// Custom Card Components with updated dark theme
const Card = ({ children, className = "" }) => (
  <div className={`bg-[#2d2d2d] rounded-xl border border-gray-700 backdrop-blur-lg ${className}`}>{children}</div>
)

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>{children}</div>
)

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold text-white ${className}`}>{children}</h2>
)

const CardContent = ({ children, className = "" }) => <div className={`p-4 space-y-4 ${className}`}>{children}</div>

const EventModal = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState("/placeholder.svg?height=400&width=800")
  const [taggedProviders, setTaggedProviders] = useState([])

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result?.toString() || "/placeholder.svg?height=400&width=800")
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProviderSelection = (provider) => {
    if (provider.selected) {
      setTaggedProviders((prev) => [...prev, provider])
    } else {
      setTaggedProviders((prev) => prev.filter((p) => !(p.id === provider.id && p.category === provider.category)))
    }
  }

  return (
    <>
      {/* Modal Backdrop with blur effect */}
      <div className="fixed inset-0 bg-[#272222] bg-opacity-80 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#1e1e1e] rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              type="button"
            >
              <X size={24} />
            </button>

            <div className="p-5 space-y-6">
              {/* Header Section */}
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Create New Event
                </h1>
                <p className="text-gray-400 text-sm">Fill in the details for your upcoming event</p>
              </div>

              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload size={18} className="text-blue-500" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-300">Event Title</label>
                    <input
                      type="text"
                      className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-300">Event Banner</label>
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-4 text-center">
                      <img
                        src={previewImage || "/placeholder.svg"}
                        alt="Event banner preview"
                        className="mb-3 rounded-lg mx-auto w-full h-36 object-cover"
                      />
                      <button
                        onClick={() => document.getElementById("fileInput").click()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
                      >
                        Upload Image/Video
                      </button>
                      <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*,video/*"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity size={18} className="text-purple-500" />
                    Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-300">Description</label>
                    <textarea
                      className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px]"
                      placeholder="Describe your event..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 flex items-center gap-1.5 text-gray-300">
                        <Calendar size={14} className="text-blue-500" />
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 flex items-center gap-1.5 text-gray-300">
                        <Clock size={14} className="text-purple-500" />
                        Time
                      </label>
                      <input
                        type="time"
                        className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 flex items-center gap-1.5 text-gray-300">
                      <MapPin size={14} className="text-blue-500" />
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Event location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 flex items-center gap-1.5 text-gray-300">
                      <Users size={14} className="text-purple-500" />
                      Expected Attendees
                    </label>
                    <input
                      type="number"
                      className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Number of attendees"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* NEW: Service Providers Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Tag size={20} className="text-blue-500" />
                    Service Providers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">Tag service providers for your event</p>

                  {/* Tagged Providers Summary */}
                  {taggedProviders.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white text-sm font-medium mb-3">Tagged Providers:</h3>
                      <div className="flex flex-wrap gap-2">
                        {taggedProviders.map((provider) => (
                          <div
                            key={`${provider.category}-${provider.id}`}
                            className="bg-[#333333] rounded-full px-3 py-1 flex items-center gap-2 group"
                          >
                            <img
                              src={provider.image || "/placeholder.svg"}
                              alt={provider.name}
                              className="w-5 h-5 rounded-full object-cover"
                            />
                            <span className="text-white text-xs">{provider.name}</span>
                            <span className="text-gray-500 text-xs">({provider.category})</span>
                            <button
                              className="text-gray-500 hover:text-red-400 transition-colors"
                              onClick={() => handleProviderSelection({ ...provider, selected: false })}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Service Provider Selector Component */}
                  <ServiceProviderSelector onSelectProvider={handleProviderSelection} />
                </CardContent>
              </Card>

              {/* Event Personalities Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mic size={20} className="text-purple-500" />
                    Event Personalities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Performers", "Guests", "Speakers"].map((type) => (
                      <div key={type} className="bg-[#333333] rounded-xl border border-gray-700 p-6">
                        <h3 className="text-white font-medium mb-4 text-lg">{type}</h3>
                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                            <div className="relative inline-block">
                              <img
                                src="/placeholder.svg?height=100&width=100"
                                alt={`Add ${type}`}
                                className="mx-auto mb-4 rounded-full w-24 h-24 object-cover ring-2 ring-gray-700"
                              />
                              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 shadow-lg">
                                <Upload size={16} className="text-white" />
                              </div>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full">
                              <span>+ Add {type}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements and Activities Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity size={20} className="text-blue-500" />
                    Requirements & Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Requirements</label>
                    <textarea
                      className="w-full p-4 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                      placeholder="List any special requirements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Event Activities</label>
                    <textarea
                      className="w-full p-4 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
                      placeholder="List planned activities..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Food and Drinks Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Coffee size={20} className="text-purple-500" />
                    Food & Drinks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Food Items</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors bg-[#333333]">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="Add food"
                          className="mx-auto mb-4 rounded-lg shadow-lg"
                        />
                        <button className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-full">
                          <Upload size={16} />
                          <span className="text-sm font-medium">Add Food Item</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Drinks</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors bg-[#333333]">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="Add drinks"
                          className="mx-auto mb-4 rounded-lg shadow-lg"
                        />
                        <button className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors w-full">
                          <Upload size={16} />
                          <span className="text-sm font-medium">Add Drink Item</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 p-6">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity font-medium"
                  type="button"
                >
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;


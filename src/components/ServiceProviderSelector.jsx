import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, Tag, Plus } from "lucide-react"

const ServiceProviderSelector = ({ onSelectProvider }) => {
  // Categories of service providers
  const categories = ["photographers", "djs", "mcs", "caterers", "decorators", "venues"]

  // Initial data for service providers by category
  const initialProviders = {
    photographers: [
      { id: 1, name: "mk.photography", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 2, name: "lens photography", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 3, name: "capture moments", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
    djs: [
      { id: 4, name: "dj jones", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 5, name: "dj nines", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 6, name: "dj beats", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
    mcs: [
      { id: 7, name: "mc fullstop", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 8, name: "mc host", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
    caterers: [
      { id: 9, name: "sweet dishes", image: "/placeholder.svg?height=60&width=60", selected: true },
      { id: 10, name: "gourmet platters", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
    decorators: [
      { id: 11, name: "elegant designs", image: "/placeholder.svg?height=60&width=60", selected: false },
      { id: 12, name: "event stylist", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
    venues: [
      { id: 13, name: "city hall", image: "/placeholder.svg?height=60&width=60", selected: false },
      { id: 14, name: "garden estate", image: "/placeholder.svg?height=60&width=60", selected: false },
    ],
  }

  // State management
  const [currentCategory, setCurrentCategory] = useState("photographers")
  const [providers, setProviders] = useState(initialProviders)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter providers based on search term
  const filteredProviders = providers[currentCategory].filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Get only selected providers for the current category
  const selectedProviders = providers[currentCategory].filter((provider) => provider.selected)

  // Toggle selection of a provider
  const toggleProviderSelection = (providerId) => {
    setProviders((prevProviders) => {
      const newProviders = { ...prevProviders }
      const category = currentCategory

      newProviders[category] = newProviders[category].map((provider) =>
        provider.id === providerId ? { ...provider, selected: !provider.selected } : provider,
      )

      return newProviders
    })

    // Call the parent component's handler if provided
    if (onSelectProvider) {
      const provider = providers[currentCategory].find((p) => p.id === providerId)
      if (provider) {
        onSelectProvider({
          ...provider,
          category: currentCategory,
          selected: !provider.selected,
        })
      }
    }
  }

  // Handle searching for providers
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Scroll categories left/right
  const scrollCategories = (direction) => {
    const currentIndex = categories.indexOf(currentCategory)
    if (direction === "left" && currentIndex > 0) {
      setCurrentCategory(categories[currentIndex - 1])
    } else if (direction === "right" && currentIndex < categories.length - 1) {
      setCurrentCategory(categories[currentIndex + 1])
    }
  }

  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <button
          className="p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => scrollCategories("left")}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-md transition-colors ${
                currentCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <button
          className="p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => scrollCategories("right")}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        {/* Current category card */}
        <div className="bg-[#333333] rounded-xl border border-gray-700 p-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-white flex items-center gap-2">
              <Tag size={16} className="text-blue-400" />
              <span className="font-medium capitalize">{currentCategory}</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-2 rounded-lg text-sm w-36 bg-[#222222] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          {/* Selected providers */}
          <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {selectedProviders.length > 0 ? (
              selectedProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="flex items-center justify-between bg-[#2d2d2d] rounded-lg p-2 hover:bg-[#3a3a3a] transition-colors cursor-pointer"
                  onClick={() => toggleProviderSelection(provider.id)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={provider.image || "/placeholder.svg"}
                      alt={provider.name}
                      className="w-10 h-10 rounded-full bg-gray-600 object-cover"
                    />
                    <span className="text-white text-sm">{provider.name}</span>
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">Tagged</div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">No {currentCategory} tagged yet</div>
            )}
          </div>
        </div>

        {/* Search results section */}
        {searchTerm && (
          <div className="bg-[#333333] rounded-xl border border-gray-700 p-4">
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <Search size={16} className="text-purple-400" />
              Search Results
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {filteredProviders.length > 0 ? (
                filteredProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="flex items-center justify-between p-2 hover:bg-[#3a3a3a] rounded-lg cursor-pointer transition-colors"
                    onClick={() => toggleProviderSelection(provider.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={provider.image || "/placeholder.svg"}
                        alt={provider.name}
                        className="w-8 h-8 rounded-full bg-gray-600 object-cover"
                      />
                      <span className="text-white text-sm">{provider.name}</span>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                        provider.selected ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {provider.selected ? (
                        "Tagged"
                      ) : (
                        <>
                          <Plus size={12} />
                          <span>Add</span>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">No results found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceProviderSelector


import { useState, useEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useTheme } from "../context/theme-provider"
import profile from "../assets/profile.jpg"
import { Home, Calendar, Settings, Plus, ChevronUp, ChevronDown } from "lucide-react"
import EventModal from "./EventModal"

const BottomNav = () => {
  const { theme } = useTheme()
  const [showEventModal, setShowEventModal] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("General")
  const categoriesRef = useRef(null)
  const location = useLocation()
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const categories = [
    { id: 1, name: "General", active: true },
    { id: 2, name: "Technology", active: false },
    { id: 3, name: "Tourism", active: false },
    { id: 4, name: "Music", active: false },
    { id: 5, name: "Lifestyle", active: false },
    { id: 6, name: "Sports", active: false },
    { id: 7, name: "Health", active: false },
  ]

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingUp(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setShowCategories(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  const selectCategory = (category) => {
    setSelectedCategory(category.name)
    setShowCategories(false)
  }

  return (
    <>
      {/* Categories Dropdown */}
      {showCategories && (
        <div
          ref={categoriesRef}
          className={`fixed w-[80%] sm:w-[320px] md:w-[280px] bottom-16 left-1/4 transform -translate-x-1/2 
                              ${theme === "dark" ? "bg-gray-800/90 backdrop-blur-md border-gray-700" : "bg-white/90 backdrop-blur-md border-gray-200"} 
                              rounded-xl p-3 shadow-xl z-50 border animate-fadeIn`}
        >
          <div
            className={`flex justify-between items-center mb-2 pb-1 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
          >
            <h3 className={`text-xs font-bold ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
              Select Category
            </h3>
            <button
              onClick={() => setShowCategories(false)}
              className={`p-1 ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"} rounded-full transition-colors`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5 max-h-[40vh] overflow-y-auto pr-1">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => selectCategory(category)}
                className={`
                  px-3 py-2 rounded-lg cursor-pointer flex items-center justify-between
                  transition-all duration-200 ${theme === "dark" ? "bg-gray-700/85 hover:bg-gray-600 text-white" : "bg-[#272222]/85 hover:bg-gray-400 text-white"}
                  ${selectedCategory === category.name ? (theme === "dark" ? "bg-gray-600 border border-gray-500" : "bg-gray-400 border border-gray-300") : ""}
                `}
              >
                <span className="text-xs md:text-sm font-medium">{category.name}</span>
                {selectedCategory === category.name && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-40
          transition-all duration-300 ease-in-out
          ${isScrollingUp ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Main Navigation */}
            <div
              className={`flex items-center gap-2 md:gap-3 ${theme === "dark" ? "bg-gray-800/90" : "bg-gray-100/90"} backdrop-blur-md p-1.5 md:p-2 rounded-full shadow-md w-auto md:w-[400px] lg:w-[500px]`}
            >
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) => `
                  p-2 md:p-2.5 rounded-full flex items-center justify-center
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#272222] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                <Home className="w-5 h-5 md:w-6 md:h-6" />
              </NavLink>

              {/* Category Selector */}
              <div
                className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 flex-grow max-w-[150px] md:max-w-[180px]
                  border ${theme === "dark" ? "border-gray-700 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-200"} rounded-full cursor-pointer
                  transition-all duration-200`}
                onClick={toggleCategories}
              >
                <span
                  className={`text-xs md:text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}
                >
                  {selectedCategory}
                </span>
                {showCategories ? (
                  <ChevronUp className={`w-3 h-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
                ) : (
                  <ChevronDown className={`w-3 h-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
                )}
              </div>

              {/* Calendar */}
              <NavLink
                to="/explore/trending"
                className={({ isActive }) => `
                  p-2 md:p-2.5 rounded-full flex items-center justify-center
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#272222] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
              </NavLink>

              {/* Settings */}
              <NavLink
                to="/settings"
                className={({ isActive }) => `
                  p-2 md:p-2.5 rounded-full flex items-center justify-center
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#272222] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                <Settings className="w-5 h-5 md:w-6 md:h-6" />
              </NavLink>

              {/* Profile */}
              <NavLink
                to="/profile"
                className={({ isActive }) => `
                  rounded-full flex items-center justify-center
                  transition-all duration-200 p-0.5
                  ${isActive ? "ring-2 ring-[#272222]" : "hover:ring-2 hover:ring-gray-300"}
                `}
              >
                <div className="relative">
                  <img
                    src={profile || "/placeholder.svg"}
                    alt="Profile"
                    className="object-cover rounded-full w-7 h-7 md:w-8 md:h-8"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-[1px] border-white"></span>
                </div>
              </NavLink>
            </div>

            {/* Host Button */}
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setShowEventModal(true)}>
              <div
                className={`${theme === "dark" ? "bg-gray-800 group-hover:bg-gray-700" : "bg-[#272222] group-hover:bg-black"} text-white p-2.5 md:p-3 rounded-full 
                  shadow-md transition-all duration-200
                  transform group-hover:scale-105`}
              >
                <Plus className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span
                className={`text-xs md:text-sm font-bold ${theme === "dark" ? "text-white group-hover:text-gray-300" : "text-[#272222] group-hover:text-black"}`}
              >
                Host
              </span>
            </div>
          </div>
        </div>
      </div>

      {showEventModal && <EventModal onClose = {() => setShowEventModal(false)}/>}
    </>
  )
}

export default BottomNav
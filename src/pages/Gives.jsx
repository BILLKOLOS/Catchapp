import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Star, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import serviceData from "../data/service"

const ServiceCard = ({ id, name, rating, specialization, price, profileData }) => (
  <Link to={`/explore/gives/service/${id}`} className="block transform transition-all duration-300 hover:scale-[1.03]">
    <div className="min-w-[200px] h-full bg-gradient-to-br from-[#272222] to-[#343434] rounded-3xl cursor-pointer p-4 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative">
          <img
            src={profileData.profile || "/placeholder.svg?height=48&width=48"}
            alt={name}
            className="rounded-full w-10 h-10 object-cover ring-2 ring-white/20"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-[1px] border-[#272222]"></div>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm">{name}</h3>
          <p className="text-xs text-gray-300">{specialization}</p>
        </div>
      </div>

      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <span className="text-base font-bold text-white mr-1.5">{rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${i < Math.floor(rating) ? "text-yellow-300 fill-yellow-300" : "text-gray-400"}`}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-gray-400 ml-1">(120+ reviews)</span>
      </div>

      <div className="text-xs text-gray-300 mb-4 font-medium">
        Starting from <span className="text-white">{price}</span>
      </div>

      <div className="flex justify-between gap-3 mt-1">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors duration-300">
          <Mail size={16} className="text-white" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors duration-300">
          <Phone size={16} className="text-white" />
        </button>
      </div>
    </div>
  </Link>
)

const ScrollButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-100 z-10 transition-colors duration-300 ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    style={{ [direction]: "10px" }}
    aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-700" />
    )}
  </button>
)

const ServiceCategory = ({ title, description, services }) => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const checkScrollability = () => {
      const container = scrollRef.current
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
      }
    }

    // Initial check
    checkScrollability()

    // Add event listener for scroll events
    const container = scrollRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollability)
    }

    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability)
      }
    }
  }, [services])

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -250 : 250
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="mb-10 mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600 md:max-w-3xl">{description}</p>
      </div>
      <div className="relative">
        <ScrollButton direction="left" onClick={() => scroll("left")} disabled={!canScrollLeft} />
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-3 pt-2 scroll-smooth hide-scrollbar -mx-2 px-2">
            {services.map((service, index) => (
              <div key={index} className="flex-none">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
        <ScrollButton direction="right" onClick={() => scroll("right")} disabled={!canScrollRight} />
      </div>
    </div>
  )
}

const ServiceCategories = () => {
  const formattedServiceData = serviceData.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    services: service.services,
  }))

  const [categories] = useState(formattedServiceData)

  return (
    <div className="pt-6 md:pt-8 pb-16 min-h-screen font-sans">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {categories.map((category, index) => (
        <ServiceCategory key={index} {...category} />
      ))}
    </div>
  )
}

export default ServiceCategories

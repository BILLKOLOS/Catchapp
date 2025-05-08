import { createContext, useState, useContext } from "react"

const RequestContext = createContext(undefined)

export function RequestProvider({ children }) {
  const [requestedEvents, setRequestedEvents] = useState({})

  const setRequestedEvent = (eventId, requested) => {
    setRequestedEvents((prev) => ({
      ...prev,
      [eventId]: requested,
    }))
  }

  const isRequested = (eventId) => {
    return !!requestedEvents[eventId]
  }

  return (
    <RequestContext.Provider value={{ requestedEvents, setRequestedEvent, isRequested }}>
      {children}
    </RequestContext.Provider>
  )
}

export function useRequest() {
  const context = useContext(RequestContext)
  if (context === undefined) {
    throw new Error("useRequest must be used within a RequestProvider")
  }
  return context
}

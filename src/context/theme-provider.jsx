"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Theme type: "light" | "dark"
const initialState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      setTheme(theme)
    },
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

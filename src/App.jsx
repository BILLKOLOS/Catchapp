import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home.jsx"
import Explore from "./pages/Explore"
import Trending from "./pages/Trending"
import ServiceCard from "./pages/Gives"
import SocialFeed from "./pages/Feed"
import PhotoProfile from "./pages/GiveItem"
import ProfilePage from "./pages/ProfilePage"
import HappeningNow from "./pages/happening_now.jsx"
import LoadingSpinner from "./components/LoadingSpinner"
import PicsGallery from "./pages/PicsGallery.jsx"
import Reviews from "./pages/Reviews.jsx"
import EventPhotoAlbum from "./pages/EventPhotoAlbum"
import ProfileGallery from "./pages/ProfileGallery.jsx"
import ProfilePhotoAlbum from "./pages/ProfilePhotoAlbum.jsx"
import EventRoute from "./pages/EventRoute.jsx"
import MyOrganizerEvents from "./pages/MyEventDetails.jsx"
import EventAnalytics from "./pages/EventAnlytics.jsx"
import MyEvent from "./pages/Myvent.jsx"
import WelcomePage from "./pages/WelcomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import SignInPage from "./pages/SignInPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import EventDetail from "./pages/EventDetail.jsx"
import Settings from "./pages/Settings"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false)
  const organizerId = 101

  useEffect(() => {
    // Check if user has visited the app before
    const visitedBefore = localStorage.getItem("visitedBefore")
    const onboardingCompleted = localStorage.getItem("onboardingCompleted")

    if (visitedBefore === "true") {
      setHasVisitedBefore(true)
    }

    if (onboardingCompleted === "true") {
      setHasCompletedOnboarding(true)
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("visitedBefore", "true")
    }, 1500) // Reduced loading time for better UX

    return () => clearTimeout(timer)
  }, [])

  const completeOnboarding = () => {
    localStorage.setItem("onboardingCompleted", "true")
    setHasCompletedOnboarding(true)
  }

  // Determine initial route based on user's history with the app
  const getInitialRoute = () => {
    if (hasVisitedBefore) {
      // User has visited before - check if they completed onboarding
      return hasCompletedOnboarding ? "/home" : "/welcome"
    } else {
      // First time visitor
      return "/welcome"
    }
  }

  return (
    <Router>
      <div className={`relative ${isLoading ? "blur-md" : ""} transition-all duration-300`}>
        <div className="text-white">
          <Routes>
            {/* Root redirect based on user history */}
            <Route path="/" element={<Navigate to={getInitialRoute()} />} />

            {/* Auth & Onboarding Flow */}
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/onboarding" element={<OnboardingPage onComplete={completeOnboarding} />} />

            {/* Main App Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/explore" element={<Explore />}>
              <Route path="trending" element={<Trending />} />
              <Route path="gives" element={<ServiceCard />} />
              <Route path="gives/service/:id" element={<PhotoProfile />}>
                <Route path="pics" element={<PicsGallery />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="album/:eventId" element={<EventPhotoAlbum />} />
              </Route>
              <Route path="feeds" element={<SocialFeed />} />
            </Route>
            <Route path="/profile/:id" element={<ProfilePage />}>
              <Route path="gallery" element={<ProfileGallery />} />
              <Route path="album/:albumId" element={<ProfilePhotoAlbum />} />
            </Route>
            <Route path="/happening-now" element={<HappeningNow />} />
            <Route path="/my-event" element={<MyEvent />}>
              <Route path="details" element={<MyOrganizerEvents organizerId={organizerId} />} />
              <Route path="details/:eventId" element={<EventDetail />} />
              <Route path="analytics" element={<EventAnalytics />} />
              {/*<Route path=":id/edit" element={<EditEvent onClose={() => navigate(-1)} />} />*/}
            </Route>
            <Route path="/event-route" element={<EventRoute />} />
          </Routes>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
    </Router>
  )
}

export default App


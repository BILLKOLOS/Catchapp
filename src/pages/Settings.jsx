"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BottomNav from "../components/HomeNavBottom"
import {
  User,
  Bell,
  Lock,
  Moon,
  HelpCircle,
  LogOut,
  ChevronRight,
  Camera,
  Edit,
  ArrowLeft,
  Save,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Shield,
} from "lucide-react"
import userSettingsData from "../data/user"
import { USER_SETTINGS_ENDPOINTS } from "../api/user-api"

const Settings = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("main") // main, profile, notifications, privacy, etc.
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=200&width=200")
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Get the first user from the mock data (in a real app, this would be the logged-in user)
  const currentUser = userSettingsData[0]

  // User profile state
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    birthdate: "",
    website: "",
  })

  // Settings state
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: {
      events: true,
      messages: true,
      updates: false,
      marketing: false,
    },
    privacy: {
      profileVisibility: "public",
      showLocation: true,
      showActivity: true,
    },
  })

  // Load user data from the mock data
  useEffect(() => {
    try {
      if (currentUser) {
        // Set profile data
        setProfile({
          name: currentUser.profile.name,
          username: currentUser.profile.username,
          bio: currentUser.profile.bio,
          email: currentUser.profile.email,
          phone: currentUser.profile.phone,
          location: currentUser.profile.location,
          birthdate: currentUser.profile.birthdate,
          website: currentUser.profile.website,
        })

        // Set profile image if available
        if (currentUser.profile.profileImage) {
          setProfileImage(currentUser.profile.profileImage)
        }

        // Set settings data
        setSettings({
          darkMode: currentUser.preferences.darkMode,
          notifications: {
            events: currentUser.preferences.notifications.events,
            messages: currentUser.preferences.notifications.messages,
            updates: currentUser.preferences.notifications.updates,
            marketing: currentUser.preferences.notifications.marketing,
          },
          privacy: {
            profileVisibility: currentUser.preferences.privacy.profileVisibility,
            showLocation: currentUser.preferences.privacy.showLocation,
            showActivity: currentUser.preferences.privacy.showActivity,
          },
        })

        setLoading(false)
      }
    } catch (err) {
      console.error("Error loading user settings:", err)
      setError("Failed to load user settings. Please try again.")
      setLoading(false)
    }
  }, [currentUser])

  const handleBack = () => {
    if (activeSection === "main") {
      navigate(-1)
    } else {
      setActiveSection("main")
      setEditMode(false)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result?.toString() || "/placeholder.svg?height=200&width=200")
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSettingToggle = (category, setting) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting],
      },
    }))
  }

  const handlePrivacyChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value,
      },
    }))
  }

  const saveProfile = async () => {
    try {
      setLoading(true)

      // In a real app, this would be an API call
      // Example API call:
      // const response = await fetch(USER_SETTINGS_ENDPOINTS.UPDATE_PROFILE.replace(':userId', currentUser.id), {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${authToken}`
      //   },
      //   body: JSON.stringify(profile)
      // });

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Profile saved:", profile)
      console.log(
        "API endpoint that would be called:",
        USER_SETTINGS_ENDPOINTS.UPDATE_PROFILE.replace(":userId", currentUser.id),
      )

      setEditMode(false)
      setLoading(false)

      // Show success message (in a real app)
      alert("Profile updated successfully!")
    } catch (err) {
      console.error("Error saving profile:", err)
      setError("Failed to save profile. Please try again.")
      setLoading(false)
    }
  }

  const saveNotificationSettings = async () => {
    try {
      setLoading(true)

      // In a real app, this would be an API call
      // Example API call:
      // const response = await fetch(USER_SETTINGS_ENDPOINTS.UPDATE_NOTIFICATIONS.replace(':userId', currentUser.id), {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${authToken}`
      //   },
      //   body: JSON.stringify(settings.notifications)
      // });

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Notification settings saved:", settings.notifications)
      console.log(
        "API endpoint that would be called:",
        USER_SETTINGS_ENDPOINTS.UPDATE_NOTIFICATIONS.replace(":userId", currentUser.id),
      )

      setLoading(false)

      // Show success message (in a real app)
      alert("Notification settings updated successfully!")
    } catch (err) {
      console.error("Error saving notification settings:", err)
      setError("Failed to save notification settings. Please try again.")
      setLoading(false)
    }
  }

  const savePrivacySettings = async () => {
    try {
      setLoading(true)

      // In a real app, this would be an API call
      // Example API call:
      // const response = await fetch(USER_SETTINGS_ENDPOINTS.UPDATE_PRIVACY.replace(':userId', currentUser.id), {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${authToken}`
      //   },
      //   body: JSON.stringify(settings.privacy)
      // });

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Privacy settings saved:", settings.privacy)
      console.log(
        "API endpoint that would be called:",
        USER_SETTINGS_ENDPOINTS.UPDATE_PRIVACY.replace(":userId", currentUser.id),
      )

      setLoading(false)

      // Show success message (in a real app)
      alert("Privacy settings updated successfully!")
    } catch (err) {
      console.error("Error saving privacy settings:", err)
      setError("Failed to save privacy settings. Please try again.")
      setLoading(false)
    }
  }

  const saveAppearanceSettings = async () => {
    try {
      setLoading(true)

      // In a real app, this would be an API call
      // Example API call:
      // const response = await fetch(USER_SETTINGS_ENDPOINTS.UPDATE_APPEARANCE.replace(':userId', currentUser.id), {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${authToken}`
      //   },
      //   body: JSON.stringify({ darkMode: settings.darkMode })
      // });

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Appearance settings saved:", { darkMode: settings.darkMode })
      console.log(
        "API endpoint that would be called:",
        USER_SETTINGS_ENDPOINTS.UPDATE_APPEARANCE.replace(":userId", currentUser.id),
      )

      setLoading(false)

      // Show success message (in a real app)
      alert("Appearance settings updated successfully!")
    } catch (err) {
      console.error("Error saving appearance settings:", err)
      setError("Failed to save appearance settings. Please try again.")
      setLoading(false)
    }
  }

  const uploadProfileImage = async () => {
    try {
      setLoading(true)

      // In a real app, this would be an API call
      // Example API call with FormData:
      // const formData = new FormData();
      // formData.append('image', imageFile);
      // const response = await fetch(USER_SETTINGS_ENDPOINTS.UPLOAD_PROFILE_IMAGE.replace(':userId', currentUser.id), {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${authToken}`
      //   },
      //   body: formData
      // });

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Profile image uploaded")
      console.log(
        "API endpoint that would be called:",
        USER_SETTINGS_ENDPOINTS.UPLOAD_PROFILE_IMAGE.replace(":userId", currentUser.id),
      )

      setLoading(false)

      // Show success message (in a real app)
      alert("Profile image updated successfully!")
    } catch (err) {
      console.error("Error uploading profile image:", err)
      setError("Failed to upload profile image. Please try again.")
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      // In a real app, this would be an API call to logout
      // Example:
      // await fetch('/api/v1/auth/logout', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${authToken}`
      //   }
      // });

      console.log("User logged out")

      // Redirect to login page
      navigate("/login")
    } catch (err) {
      console.error("Error logging out:", err)
      alert("Failed to log out. Please try again.")
    }
  }

  // Show loading state
  if (loading && !profile.name) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#E6C2BC] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading settings...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-6">
        <div className="text-center bg-white p-8 rounded-3xl shadow-lg max-w-md">
          <div className="text-red-500 mb-4">
            <X size={48} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-[#3D4046] mb-2">Error Loading Settings</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#E6C2BC] text-[#3D4046] rounded-xl text-base font-semibold hover:bg-[#C7B4AF] transition-colors shadow-md"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const renderMainSettings = () => (
    <div className="space-y-8">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="p-6 flex items-center space-x-6">
          <div className="relative">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-[#E6C2BC] shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-extrabold text-2xl text-[#3D4046]">{profile.name}</h3>
            <p className="text-gray-600 text-base tracking-wide">{profile.username}</p>
          </div>
          <button
            onClick={() => setActiveSection("profile")}
            className="px-6 py-3 bg-[#E6C2BC] text-[#3D4046] rounded-xl text-base font-semibold hover:bg-[#C7B4AF] transition-colors shadow-md"
          >
            <Edit size={18} />
          </button>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="divide-y divide-gray-200">
          <SettingItem
            icon={<Bell className="text-[#E6C2BC]" />}
            title="Notifications"
            onClick={() => setActiveSection("notifications")}
          />
          <SettingItem
            icon={<Lock className="text-[#E6C2BC]" />}
            title="Privacy & Security"
            onClick={() => setActiveSection("privacy")}
          />
          <SettingItem
            icon={<Moon className="text-[#E6C2BC]" />}
            title="Appearance"
            onClick={() => setActiveSection("appearance")}
            toggle
            isActive={settings.darkMode}
            onToggle={() => setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))}
          />
          <SettingItem
            icon={<HelpCircle className="text-[#E6C2BC]" />}
            title="Help & Support"
            onClick={() => setActiveSection("help")}
          />
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full max-w-4xl mx-auto py-4 bg-gray-100 text-[#3D4046] font-semibold rounded-2xl flex items-center justify-center space-x-3 hover:bg-gray-200 transition-colors shadow-sm"
      >
        <LogOut size={20} />
        <span className="text-lg">Log Out</span>
      </button>
    </div>
  )

  const renderProfileSettings = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8 relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#3D4046]">Profile Information</h2>
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="flex items-center space-x-2 text-[#E6C2BC] hover:text-[#C7B4AF] text-lg font-semibold"
              >
                <Edit size={18} />
                <span className="hidden md:block">Edit</span>
              </button>
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={() => setEditMode(false)}
                  className="p-3 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition"
                  aria-label="Cancel edit"
                >
                  <X size={22} />
                </button>
                <button
                  onClick={saveProfile}
                  className="p-3 text-[#E6C2BC] hover:text-[#C7B4AF] rounded-full hover:bg-gray-100 transition"
                  aria-label="Save profile"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-[#E6C2BC] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Save size={22} />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#E6C2BC] shadow-lg"
              />
              {editMode && (
                <label
                  className="absolute bottom-0 right-0 bg-[#E6C2BC] p-3 rounded-full cursor-pointer shadow-lg opacity-90 group-hover:opacity-100 transition-opacity"
                  aria-label="Change profile image"
                >
                  <Camera size={20} className="text-white" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      handleImageChange(e)
                      uploadProfileImage()
                    }}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Profile Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProfileField
              icon={<User />}
              label="Full Name"
              value={profile.name}
              editable={editMode}
              onChange={(value) => handleProfileChange("name", value)}
            />
            <ProfileField
              icon={<User />}
              label="Username"
              value={profile.username}
              editable={editMode}
              onChange={(value) => handleProfileChange("username", value)}
            />
            <ProfileField
              icon={<Edit />}
              label="Bio"
              value={profile.bio}
              editable={editMode}
              multiline
              onChange={(value) => handleProfileChange("bio", value)}
            />
            <ProfileField
              icon={<Mail />}
              label="Email"
              value={profile.email}
              editable={editMode}
              onChange={(value) => handleProfileChange("email", value)}
            />
            <ProfileField
              icon={<Phone />}
              label="Phone"
              value={profile.phone}
              editable={editMode}
              onChange={(value) => handleProfileChange("phone", value)}
            />
            <ProfileField
              icon={<MapPin />}
              label="Location"
              value={profile.location}
              editable={editMode}
              onChange={(value) => handleProfileChange("location", value)}
            />
            <ProfileField
              icon={<Calendar />}
              label="Birth Date"
              value={profile.birthdate}
              editable={editMode}
              type="date"
              onChange={(value) => handleProfileChange("birthdate", value)}
            />
            <ProfileField
              icon={<Globe />}
              label="Website"
              value={profile.website}
              editable={editMode}
              onChange={(value) => handleProfileChange("website", value)}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#3D4046]">Notification Preferences</h2>
            <button
              onClick={saveNotificationSettings}
              className="px-6 py-3 bg-[#E6C2BC] text-[#3D4046] rounded-xl text-base font-semibold hover:bg-[#C7B4AF] transition-colors shadow-md flex items-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#3D4046] border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <Save size={18} className="mr-2" />
              )}
              <span className="hidden md:block">Save Changes</span>
            </button>
          </div>

          <div className="space-y-6">
            <ToggleSetting
              title="Event Invitations & Updates"
              description="Get notified about event invites and changes"
              isActive={settings.notifications.events}
              onToggle={() => handleSettingToggle("notifications", "events")}
            />
            <ToggleSetting
              title="Messages"
              description="Receive notifications for new messages"
              isActive={settings.notifications.messages}
              onToggle={() => handleSettingToggle("notifications", "messages")}
            />
            <ToggleSetting
              title="App Updates"
              description="Be informed about new features and improvements"
              isActive={settings.notifications.updates}
              onToggle={() => handleSettingToggle("notifications", "updates")}
            />
            <ToggleSetting
              title="Marketing & Promotions"
              description="Receive offers and promotional content"
              isActive={settings.notifications.marketing}
              onToggle={() => handleSettingToggle("notifications", "marketing")}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderPrivacySettings = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#3D4046]">Privacy & Security</h2>
            <button
              onClick={savePrivacySettings}
              className="px-6 py-3 bg-[#E6C2BC] text-[#3D4046] rounded-xl text-base font-semibold hover:bg-[#C7B4AF] transition-colors shadow-md flex items-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#3D4046] border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <Save size={18} className="mr-2" />
              )}
              <span className="hidden md:block">Save Changes</span>
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[#3D4046] mb-4 text-lg">Profile Visibility</h3>
              <div className="space-y-3">
                <RadioOption
                  label="Public"
                  description="Anyone can view your profile"
                  checked={settings.privacy.profileVisibility === "public"}
                  onChange={() => handlePrivacyChange("profileVisibility", "public")}
                />
                <RadioOption
                  label="Private"
                  description="Only approved followers can view your profile"
                  checked={settings.privacy.profileVisibility === "private"}
                  onChange={() => handlePrivacyChange("profileVisibility", "private")}
                />
                <RadioOption
                  label="Event Attendees Only"
                  description="Only people attending the same events can view your profile"
                  checked={settings.privacy.profileVisibility === "events"}
                  onChange={() => handlePrivacyChange("profileVisibility", "events")}
                />
              </div>
            </div>

            <div className="space-y-6">
              <ToggleSetting
                title="Show Location"
                description="Allow others to see your location on events"
                isActive={settings.privacy.showLocation}
                onToggle={() => handleSettingToggle("privacy", "showLocation")}
              />
              <ToggleSetting
                title="Activity Status"
                description="Show when you're active on the platform"
                isActive={settings.privacy.showActivity}
                onToggle={() => handleSettingToggle("privacy", "showActivity")}
              />
            </div>

            <button className="w-full py-4 bg-gray-100 text-[#3D4046] font-semibold rounded-2xl flex items-center justify-center space-x-3 hover:bg-gray-200 transition-colors shadow-sm">
              <Shield size={20} className="text-[#E6C2BC]" />
              <span>Change Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#3D4046]">Appearance</h2>
            <button
              onClick={saveAppearanceSettings}
              className="px-6 py-3 bg-[#E6C2BC] text-[#3D4046] rounded-xl text-base font-semibold hover:bg-[#C7B4AF] transition-colors shadow-md flex items-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#3D4046] border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <Save size={18} className="mr-2" />
              )}
              <span clssName="hidden md:block">Save Changes</span>
            </button>
          </div>

          <div className="space-y-6">
            <ToggleSetting
              title="Dark Mode"
              description="Use dark theme throughout the app"
              isActive={settings.darkMode}
              onToggle={() => setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))}
            />

            <div>
              <h3 className="font-semibold text-[#3D4046] mb-4 text-lg">Theme Color</h3>
              <div className="flex space-x-6 mt-3">
                {["#E6C2BC", "#C7B4AF", "#3D4046", "#6B7280", "#4F46E5"].map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-full transition-all shadow-md ${color === "#E6C2BC" ? "ring-4 ring-offset-2 ring-gray-400" : ""}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} theme`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderHelpSettings = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-[#3D4046] mb-8">Help & Support</h2>

          <div className="space-y-6">
            <button className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm">
              <div className="flex items-center space-x-4">
                <HelpCircle size={24} className="text-[#E6C2BC]" />
                <span className="font-semibold text-[#3D4046] text-lg">FAQs</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm">
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-[#E6C2BC]" />
                <span className="font-semibold text-[#3D4046] text-lg">Contact Support</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm">
              <div className="flex items-center space-x-4">
                <Globe size={24} className="text-[#E6C2BC]" />
                <span className="font-semibold text-[#3D4046] text-lg">Terms of Service</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm">
              <div className="flex items-center space-x-4">
                <Shield size={24} className="text-[#E6C2BC]" />
                <span className="font-semibold text-[#3D4046] text-lg">Privacy Policy</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        <p>App Version 1.0.0</p>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSettings()
      case "notifications":
        return renderNotificationSettings()
      case "privacy":
        return renderPrivacySettings()
      case "appearance":
        return renderAppearanceSettings()
      case "help":
        return renderHelpSettings()
      default:
        return renderMainSettings()
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "profile":
        return "Edit Profile"
      case "notifications":
        return "Notifications"
      case "privacy":
        return "Privacy & Security"
      case "appearance":
        return "Appearance"
      case "help":
        return "Help & Support"
      default:
        return "Settings"
    }
  }

  return (
    <div
      className={`min-h-screen ${settings.darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-[#3D4046]"} font-sans`}
    >
      {/* Header */}
      <div className={`${settings.darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center">
          <button
            onClick={handleBack}
            className={`p-3 -ml-3 rounded-full ${settings.darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition`}
          >
            <ArrowLeft size={24} className={settings.darkMode ? "text-white" : "text-[#3D4046]"} />
          </button>
          <h1 className={`text-2xl font-extrabold ${settings.darkMode ? "text-white" : "text-[#3D4046]"} ml-4`}>
            {getSectionTitle()}
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto p-6 pt-8 pb-28">{renderContent()}</main>

      <BottomNav />
    </div>
  )
}

// Helper Components
import PropTypes from "prop-types"

const SettingItem = ({ icon, title, onClick, toggle = false, isActive, onToggle }) => (
  <button
    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors rounded-2xl"
    onClick={toggle ? onToggle : onClick}
  >
    <div className="flex items-center space-x-4">
      {icon}
      <span className="font-semibold text-[#3D4046] text-lg">{title}</span>
    </div>
    {toggle ? (
      <div className={`w-12 h-7 rounded-full p-1 transition-colors ${isActive ? "bg-[#E6C2BC]" : "bg-gray-200"}`}>
        <div
          className={`w-5 h-5 rounded-full bg-white transform transition-transform ${isActive ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </div>
    ) : (
      <ChevronRight size={20} className="text-gray-400" />
    )}
  </button>
)

SettingItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  toggle: PropTypes.bool,
  isActive: PropTypes.bool,
  onToggle: PropTypes.func,
}

const ProfileField = ({ icon, label, value, editable, onChange, multiline = false, type = "text" }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-3 text-gray-600">
      {icon && <span className="text-[#E6C2BC]">{icon}</span>}
      <label className="text-base font-semibold">{label}</label>
    </div>
    {editable ? (
      multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E6C2BC] focus:border-transparent resize-none"
          rows={4}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E6C2BC] focus:border-transparent"
        />
      )
    ) : (
      <p className="font-semibold text-[#3D4046] text-lg">{value}</p>
    )}
  </div>
)

ProfileField.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  type: PropTypes.string,
}

const ToggleSetting = ({ title, description, isActive, onToggle }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-semibold text-[#3D4046] text-lg">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
    <button
      onClick={onToggle}
      className={`w-14 h-7 rounded-full p-1 transition-colors ${isActive ? "bg-[#E6C2BC]" : "bg-gray-200"}`}
      aria-pressed={isActive}
      aria-label={`Toggle ${title}`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white transform transition-transform ${isActive ? "translate-x-7" : "translate-x-0"}`}
      ></div>
    </button>
  </div>
)

ToggleSetting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isActive: PropTypes.bool,
  onToggle: PropTypes.func,
}

const RadioOption = ({ label, description, checked, onChange }) => (
  <label className="flex items-start space-x-4 cursor-pointer">
    <div className="flex items-center h-6">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 text-[#E6C2BC] border-gray-300 focus:ring-[#E6C2BC]"
      />
    </div>
    <div className="flex-1">
      <p className="font-semibold text-[#3D4046] text-lg">{label}</p>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </label>
)

RadioOption.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Settings

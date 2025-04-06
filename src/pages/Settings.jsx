import { useState } from "react"
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

const Settings = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("main") // main, profile, notifications, privacy, etc.
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=200&width=200")
  const [editMode, setEditMode] = useState(false)

  // User profile state
  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Event enthusiast and professional photographer based in Nairobi",
    email: "john.doe@example.com",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    birthdate: "1990-05-15",
    website: "www.johndoe.com",
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

  const saveProfile = () => {
    // Here you would typically save the profile to your backend
    console.log("Saving profile:", profile)
    setEditMode(false)
  }

  const renderMainSettings = () => (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 flex items-center space-x-4">
          <div className="relative">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#E6C2BC]"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#3D4046]">{profile.name}</h3>
            <p className="text-gray-500 text-sm">{profile.username}</p>
          </div>
          <button
            onClick={() => setActiveSection("profile")}
            className="px-4 py-2 bg-[#E6C2BC] text-[#3D4046] rounded-lg text-sm font-medium hover:bg-[#C7B4AF] transition-colors"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
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
      <button className="w-full py-3 bg-gray-100 text-[#3D4046] font-medium rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors">
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </div>
  )

  const renderProfileSettings = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#3D4046]">Profile Information</h2>
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="flex items-center space-x-1 text-[#E6C2BC] hover:text-[#C7B4AF]"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditMode(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
                <button
                  onClick={saveProfile}
                  className="p-2 text-[#E6C2BC] hover:text-[#C7B4AF] rounded-full hover:bg-gray-100"
                >
                  <Save size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-[#E6C2BC]"
              />
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-[#E6C2BC] p-2 rounded-full cursor-pointer shadow-md">
                  <Camera size={16} className="text-white" />
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              )}
            </div>
          </div>

          {/* Profile Fields */}
          <div className="space-y-4">
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
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#3D4046] mb-6">Notification Preferences</h2>

          <div className="space-y-4">
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
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#3D4046] mb-6">Privacy & Security</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-[#3D4046] mb-3">Profile Visibility</h3>
              <div className="space-y-2">
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

            <div className="space-y-4">
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

            <button className="w-full py-3 bg-gray-100 text-[#3D4046] font-medium rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors">
              <Shield size={18} className="text-[#E6C2BC]" />
              <span>Change Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#3D4046] mb-6">Appearance</h2>

          <div className="space-y-4">
            <ToggleSetting
              title="Dark Mode"
              description="Use dark theme throughout the app"
              isActive={settings.darkMode}
              onToggle={() => setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))}
            />

            <div>
              <h3 className="font-medium text-[#3D4046] mb-3">Theme Color</h3>
              <div className="flex space-x-4 mt-2">
                {["#E6C2BC", "#C7B4AF", "#3D4046", "#6B7280", "#4F46E5"].map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full transition-all ${color === "#E6C2BC" ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
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
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#3D4046] mb-6">Help & Support</h2>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <HelpCircle size={20} className="text-[#E6C2BC]" />
                <span className="font-medium text-[#3D4046]">FAQs</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#E6C2BC]" />
                <span className="font-medium text-[#3D4046]">Contact Support</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Globe size={20} className="text-[#E6C2BC]" />
                <span className="font-medium text-[#3D4046]">Terms of Service</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-[#E6C2BC]" />
                <span className="font-medium text-[#3D4046]">Privacy Policy</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} className="text-[#3D4046]" />
          </button>
          <h1 className="text-xl font-bold text-[#3D4046] ml-2">{getSectionTitle()}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 pt-6 pb-24">{renderContent()}</div>

      <BottomNav />
    </div>
  )
}

// Helper Components
const SettingItem = ({ icon, title, onClick, toggle = false, isActive, onToggle }) => (
  <button
    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
    onClick={toggle ? onToggle : onClick}
  >
    <div className="flex items-center space-x-3">
      {icon}
      <span className="font-medium text-[#3D4046]">{title}</span>
    </div>
    {toggle ? (
      <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isActive ? "bg-[#E6C2BC]" : "bg-gray-200"}`}>
        <div
          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${isActive ? "translate-x-4" : "translate-x-0"}`}
        ></div>
      </div>
    ) : (
      <ChevronRight size={18} className="text-gray-400" />
    )}
  </button>
)

const ProfileField = ({ icon, label, value, editable, onChange, multiline = false, type = "text" }) => (
  <div className="space-y-1">
    <div className="flex items-center space-x-2 text-gray-500">
      {icon && <span className="text-[#E6C2BC]">{icon}</span>}
      <label className="text-sm">{label}</label>
    </div>
    {editable ? (
      multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6C2BC] focus:border-transparent"
          rows={3}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6C2BC] focus:border-transparent"
        />
      )
    ) : (
      <p className="font-medium text-[#3D4046]">{value}</p>
    )}
  </div>
)

const ToggleSetting = ({ title, description, isActive, onToggle }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-medium text-[#3D4046]">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full p-1 transition-colors ${isActive ? "bg-[#E6C2BC]" : "bg-gray-200"}`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transform transition-transform ${isActive ? "translate-x-6" : "translate-x-0"}`}
      ></div>
    </button>
  </div>
)

const RadioOption = ({ label, description, checked, onChange }) => (
  <label className="flex items-start space-x-3 cursor-pointer">
    <div className="flex items-center h-5">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-[#E6C2BC] border-gray-300 focus:ring-[#E6C2BC]"
      />
    </div>
    <div className="flex-1">
      <p className="font-medium text-[#3D4046]">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </label>
)

export default Settings
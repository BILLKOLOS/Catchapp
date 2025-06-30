import { useState, useRef } from "react"
import { Heart, MessageCircle, Share2, BookmarkIcon, Camera, ImageIcon, Smile, X } from "lucide-react"

const EmojiPicker = ({ onSelect, onClose }) => {
  const emojis = ["😊", "😂", "🥰", "😎", "🤔", "👍", "❤️", "🎉", "🔥", "✨", "🌟", "💪", "🙌", "🤝", "👋"]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="w-11/12 max-w-md bg-white mt-0 p-4 rounded-xl shadow-2xl border border-gray-100 transform transition-all 
        animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-5 gap-2">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => onSelect(emoji)}
              className="w-full text-3xl p-2 rounded-lg hover:bg-gray-100 
              active:bg-gray-200 active:scale-95 transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {emoji}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg 
          hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "jane",
      avatar:
        "https://images.pexels.com/photos/30007344/pexels-photo-30007344/free-photo-of-dynamic-portrait-of-a-woman-with-flowing-hair.jpeg?auto=compress&cs=tinysrgb&w=600",
      verified: true,
      content: "I attended the culture color fest in mount kenya/nyeri county",
      location: "Mount Kenya, Nyeri County",
      images: [
        "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/28976233/pexels-photo-28976233/free-photo-of-rustic-cheese-board-with-cold-cuts-and-bread.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      likes: 23,
      isLiked: false,
      comments: 12,
      shares: 5,
      timestamp: "2h ago",
      saved: false,
    },
    {
      id: 2,
      username: "cate",
      avatar:
        "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600",
      verified: true,
      content: "it was an honor attending the neet gala in lavington nairobi",
      location: "Lavington, Nairobi",
      images: ["https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg?auto=compress&cs=tinysrgb&w=600"],
      likes: 45,
      isLiked: false,
      comments: 8,
      shares: 3,
      timestamp: "4h ago",
      saved: false,
    },
    {
      id: 3,
      username: "travel_kenya",
      avatar:
        "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
      verified: true,
      content: "Sunset safari at Masai Mara. The wildlife here never ceases to amaze! 🦁🌅",
      location: "Masai Mara National Reserve",
      images: [
        "https://images.pexels.com/photos/13033128/pexels-photo-13033128.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/20335122/pexels-photo-20335122/free-photo-of-elephant-in-savannah.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/27832453/pexels-photo-27832453/free-photo-of-a-lion-walking-across-the-road-in-front-of-a-jeep.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      likes: 892,
      isLiked: false,
      comments: 56,
      shares: 124,
      timestamp: "6h ago",
      saved: false,
    },
    {
      id: 4,
      username: "foodie_nairobi",
      avatar:
        "https://images.pexels.com/photos/15566416/pexels-photo-15566416/free-photo-of-beautiful-woman-with-necklace-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "Found this hidden gem in Westlands! Best nyama choma in town 😋🍖",
      location: "Westlands, Nairobi",
      images: ["https://images.pexels.com/photos/3743389/pexels-photo-3743389.jpeg?auto=compress&cs=tinysrgb&w=600"],
      likes: 156,
      isLiked: false,
      comments: 23,
      shares: 7,
      timestamp: "12h ago",
      saved: false,
    },
  ])

  // People around you data
  const [peopleAroundYou] = useState([
    {
      id: 1,
      username: "brian gikunga",
      avatar:
        "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFollowing: false,
    },
    {
      id: 2,
      username: "quincy gikunga",
      avatar:
        "https://images.pexels.com/photos/30007344/pexels-photo-30007344/free-photo-of-dynamic-portrait-of-a-woman-with-flowing-hair.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFollowing: false,
    },
    {
      id: 3,
      username: "nancy ciku",
      avatar:
        "https://images.pexels.com/photos/30039441/pexels-photo-30039441/free-photo-of-emotional-portrait-of-a-woman-in-low-light.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFollowing: false,
    },
  ])

  const [newPostText, setNewPostText] = useState("")
  const [selectedImages, setSelectedImages] = useState([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [followingStatus, setFollowingStatus] = useState({})
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files)
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))
    if (imageFiles.length > 0) {
      const newImages = imageFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file: file,
      }))
      setSelectedImages((prev) => [...prev, ...newImages].slice(0, 4)) // Limit to 4 images
    }
  }

  const handleCameraCapture = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImages((prev) =>
        [
          ...prev,
          {
            url: URL.createObjectURL(file),
            file: file,
          },
        ].slice(0, 4),
      )
    }
  }

  const removeImage = (indexToRemove) => {
    setSelectedImages((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleEmojiSelect = (emoji) => {
    setNewPostText((prev) => prev + emoji)
    setShowEmojiPicker(false)
  }

  const handlePost = () => {
    if (newPostText.trim() || selectedImages.length > 0) {
      const newPost = {
        id: Date.now(),
        username: "you",
        avatar:
          "https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
        verified: true,
        content: newPostText,
        images: selectedImages.map((img) => img.url),
        likes: 0,
        isLiked: false,
        comments: 0,
        shares: 0,
        timestamp: "Just now",
        saved: false,
      }

      setPosts([newPost, ...posts])
      setNewPostText("")
      setSelectedImages([])
    }
  }

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          }
        }
        return post
      }),
    )
  }

  const handleSave = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            saved: !post.saved,
          }
        }
        return post
      }),
    )
  }

  const handleFollow = (userId) => {
    setFollowingStatus((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }))
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen mt-20 pt-4 font-sans">
      {/* Create Post Card */}
      <div className="bg-white rounded-2xl shadow-md mb-4 mx-3 sm:mx-0">
        <div className="p-4 sm:p-5">
          {/* Profile and Input Section */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Your profile"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              placeholder="I attended..."
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            />
          </div>

          {/* Image Preview Section */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {selectedImages.map((img, index) => (
                <div key={index} className="relative w-full aspect-square">
                  <img
                    src={img.url || "/placeholder.svg"}
                    alt={`Selected ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-1 bg-gray-800 bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Media Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                multiple
                className="hidden"
              />
              <input
                type="file"
                ref={cameraInputRef}
                onChange={handleCameraCapture}
                accept="image/*"
                capture="environment"
                className="hidden"
              />
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Camera className="w-5 h-5" />
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Post Button */}
            <button
              onClick={handlePost}
              disabled={!newPostText.trim() && selectedImages.length === 0}
              className="w-full sm:w-auto px-6 py-2 bg-[#272222] text-white font-medium rounded-full hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* People Around You Section */}
      <div className="bg-white rounded-2xl shadow-md mb-6 mx-3 sm:mx-0 p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">people on catchap around you</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {peopleAroundYou.map((person) => (
            <div
              key={person.id}
              className="flex-shrink-0 bg-[#272222] rounded-2xl p-4 text-center min-w-[140px] w-[140px]"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-gray-600">
                <img
                  src={person.avatar || "/placeholder.svg"}
                  alt={person.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white text-sm font-medium mb-3 leading-tight">{person.username}</h4>
              <button
                onClick={() => handleFollow(person.id)}
                className={`w-full px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  followingStatus[person.id] ? "bg-gray-600 text-white" : "bg-white text-[#272222] hover:bg-gray-100"
                }`}
              >
                {followingStatus[person.id] ? "following" : "follow"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emoji Picker Modal */}
      {showEmojiPicker && <EmojiPicker onSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />}

      {/* Posts */}
      <div className="space-y-4 px-3 sm:px-0">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden transition-transform hover:shadow-md"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={post.avatar || "/placeholder.svg"}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900">@{post.username}</span>
                    {post.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{post.location}</div>
                </div>
              </div>
              <button className="px-4 py-1.5 text-sm text-[#272222] border border-[#272222] rounded-full hover:bg-[#272222] hover:text-white transition-colors">
                Follow
              </button>
            </div>

            {/* Post Content */}
            <p className="px-4 pb-3 text-gray-800">{post.content}</p>

            {/* Post Images */}
            {post.images.length > 0 && (
              <div className={`grid gap-0.5 ${post.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {post.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Post ${index + 1}`}
                      className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 group" onClick={() => handleLike(post.id)}>
                    <Heart
                      className={`w-5 h-5 ${post.isLiked ? "fill-red-500 text-red-500" : "text-gray-500 group-hover:text-red-500"} transition-colors`}
                    />
                    <span
                      className={`text-sm ${post.isLiked ? "text-red-500" : "text-gray-500 group-hover:text-red-500"}`}
                    >
                      {post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1.5 group">
                    <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
                    <span className="text-sm text-gray-500 group-hover:text-blue-500">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 group">
                    <Share2 className="w-5 h-5 text-gray-500 group-hover:text-green-500" />
                    <span className="text-sm text-gray-500 group-hover:text-green-500">{post.shares}</span>
                  </button>
                </div>

                <button onClick={() => handleSave(post.id)} className="group">
                  <BookmarkIcon
                    className={`w-5 h-5 ${post.saved ? "fill-yellow-500 text-yellow-500" : "text-gray-500 group-hover:text-yellow-500"} transition-colors`}
                  />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-400">{post.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialFeed

import PropTypes from "prop-types"
import { useState } from "react"
import { X } from 'lucide-react'

const RequestInviteModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ name, email, message })
    }
  }

  return (
    <>
      {/* Modal Backdrop with blur effect */}
      <div className="fixed inset-0 bg-[#272222] bg-opacity-80 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#1e1e1e] rounded-2xl shadow-2xl p-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              type="button"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Request an Invite
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="message">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-2.5 bg-[#333333] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional information"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity font-medium"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

RequestInviteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
}

export default RequestInviteModal

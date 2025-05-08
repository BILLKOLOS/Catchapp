"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

const RequestInviteModal = ({ onClose }) => {
  // Close the modal automatically after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-[#272222] rounded-2xl p-6 max-w-md w-full shadow-xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
        >
          <X className="w-4 h-4 text-gray-300" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
          <p className="text-gray-300 mb-4">
            Your request has been received. Please wait for the approval from the event organizer.
          </p>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default RequestInviteModal

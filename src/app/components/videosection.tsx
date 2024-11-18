'use client'

import { useState, useRef } from 'react'

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const steps = [
    {
      title: "Add or import data",
      description: "Add the data manually or simply copy paste data from Google Sheet or Excel"
    },
    {
      title: "Organize the map",
      description: "Rearrange and resize groups freely in the map in a way that makes most sense"
    },
    {
      title: "Customize the map theme",
      description: "Customize the map's look and feel using the suite of styling options."
    },
    {
      title: "Publish the Map",
      description: "Export as website, embed inside your website or download an image"
    }
  ]

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">How it works</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          We've made it easy to create and publish maps<br className="hidden sm:inline" />
          so you can focus on research and curation.
        </h3>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <hr className="mt-6 border-gray-200" />
                )}
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 relative bg-white rounded-lg shadow-md overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/how-it-works.mp4"
              className="w-full h-full object-cover"
              controls
              poster="/images/video-poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-30"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isPlaying ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
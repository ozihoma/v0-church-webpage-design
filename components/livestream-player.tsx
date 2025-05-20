"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function LivestreamPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLive, setIsLive] = useState(true)

  // Simulate checking if a livestream is currently active
  useEffect(() => {
    // In a real implementation, you would check against your streaming service API
    const checkLiveStatus = () => {
      // For demo purposes, we'll just set a random status occasionally
      if (Math.random() > 0.7) {
        setIsLive((prev) => !prev)
      }
    }

    const interval = setInterval(checkLiveStatus, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control the video player here
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // In a real implementation, you would control the video player here
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video bg-gray-900 rounded-md overflow-hidden">
        {isLive ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* This would be replaced with an actual video player in production */}
              <img
                src="/placeholder.svg?height=480&width=854"
                alt="Livestream placeholder"
                className="w-full h-full object-cover"
              />

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full h-16 w-16 flex items-center justify-center"
                    onClick={togglePlay}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              )}
            </div>

            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">LIVE</div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Sunday Worship Service</h3>
                  <p className="text-gray-300 text-sm">Pastor John Smith</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-white text-xl font-bold mb-2">No Live Service Right Now</h3>
            <p className="text-gray-300 mb-4">Our next livestream will be Sunday at 9:00 AM</p>
            <Button asChild>
              <a href="/sermons">Watch Previous Services</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

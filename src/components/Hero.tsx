import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const introVideo = document.getElementById('introVideo') as HTMLVideoElement
    const loopVideo = document.getElementById('loopVideo') as HTMLVideoElement

    if (introVideo && loopVideo) {
      const handleVideoError = (e: Event) => {
        const video = e.target as HTMLVideoElement
        console.error('Video loading error:', video.error)
        video.style.display = 'none'
      }

      introVideo.addEventListener('error', handleVideoError)
      loopVideo.addEventListener('error', handleVideoError)

      loopVideo.load()

      introVideo.addEventListener('ended', () => {
        introVideo.style.display = 'none'
        loopVideo.style.display = 'block'
        loopVideo.play().catch(error => {
          console.error('Error playing loop video:', error)
        })
      })

      return () => {
        introVideo.removeEventListener('error', handleVideoError)
        loopVideo.removeEventListener('error', handleVideoError)
      }
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          id="introVideo"
          className="object-cover w-full h-full"
          playsInline
          muted
          autoPlay
          src="https://syntra.ai/wp-content/uploads/2025/01/s1.webm"
        >
          <source src="https://syntra.ai/wp-content/uploads/2025/01/s1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video 
          id="loopVideo"
          className="object-cover w-full h-full hidden"
          playsInline
          muted
          loop
          src="https://syntra.ai/wp-content/uploads/2025/01/loopv2.webm"
        >
          <source src="https://syntra.ai/wp-content/uploads/2025/01/loopv2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        {/* Animated Letters */}
        <div className="letter-animation-container flex justify-center items-center pt-20">
          <div className="letter font-reospec" style={{ '--delay': '0s' } as React.CSSProperties}>I</div>
          <div className="letter font-reospec" style={{ '--delay': '0.2s' } as React.CSSProperties}>R</div>
          <div className="letter font-reospec" style={{ '--delay': '0.4s' } as React.CSSProperties}>M</div>
          <div className="letter font-reospec" style={{ '--delay': '0.6s' } as React.CSSProperties}>A</div>
        </div>

        {/* Subtitle */}
        <div id="subtitle" className="text-2xl mb-8 tracking-wider text-center opacity-0 animate-fade-in mt-[200px] relative">
          <div className="subtitle-text flex gap-6">
            <span>Intelligent</span>
            <span>Recursive</span>
            <span>Medium</span>
            <span>Algorithm</span>
          </div>
        </div>

        {/* Button */}
        <button id="exploreBtn" className="px-8 py-3 border-2 border-white rounded-full text-white opacity-0 animate-fade-in-delay">
          EXPLORE
        </button>
      </div>
    </div>
  )
}

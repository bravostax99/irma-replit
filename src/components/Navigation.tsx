import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      const nav = document.getElementById('mainNav')
      
      if (currentScroll > 0) {
        nav?.classList.add('bg-black/30', 'backdrop-blur-sm')
      } else {
        nav?.classList.remove('bg-black/30', 'backdrop-blur-sm')
      }
      
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="mainNav" className="fixed w-full z-50 transition-all duration-300 opacity-0 animate-nav-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center relative">
          {/* Left Menu Items */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-[260px]">
            <a href="/docs" className="text-white hover:text-gray-300">Docs</a>
            <a href="/tokenomics" className="text-white hover:text-gray-300">Tokenomics</a>
          </div>

          {/* Logo */}
          <div className="font-reospec text-2xl text-white tracking-[8px]">
            IRMA
          </div>

          {/* Right Menu Items */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 translate-x-[100px]">
            <a href="/vision" className="text-white hover:text-gray-300">Vision</a>
            <a href="/twitter" className="text-white hover:text-gray-300 flex items-center">
              Twitter
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="mobile-circle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </button>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
          <a href="/docs" className="block px-3 py-2 text-white">Docs</a>
          <a href="/tokenomics" className="block px-3 py-2 text-white">Tokenomics</a>
          <a href="/vision" className="block px-3 py-2 text-white">Vision</a>
          <a href="/twitter" className="block px-3 py-2 text-white flex items-center">
            Twitter
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
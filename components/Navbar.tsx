'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      
      // Shadow effect
      setScrolled(currentScrollY > 40)
      
      // Show/Hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed threshold
        setVisible(false)
      } else {
        // Scrolling up or at top
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  const navLinks = [
    { label: 'Pages +', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Blog', href: '#' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-[20px] pt-[20px] md:px-[30px] md:pt-[30px] transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full max-w-[1400px] bg-[#fbf8e9] rounded-[56px] px-[24px] py-[24px] md:px-[50px] md:py-[32px] flex items-center justify-between transition-shadow duration-300"
           style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.12)' : 'none' }}>
        
        {/* Logo */}
        <Link href="/">
          <img
            src="https://framerusercontent.com/images/ihTtbR2rDfjiVzSUaS37G4MPbms.svg"
            alt="Zentra"
            width={133}
            height={39}
            className="block w-[94px] h-[28px] md:w-[133px] md:h-[39px]"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-[24px] lg:gap-[40px]">
          {navLinks.map(l => (
            <Link key={l.label} href={l.href} className="font-boldonse text-[16px] text-[#136df5] hover:opacity-80 transition-opacity">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="#" className="hidden md:inline-flex items-center gap-2 font-boldonse text-[20px] text-[#ed5d3a] hover:opacity-80 transition-opacity">
          Let&apos;s Talk 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-[26px] h-[4px] bg-[#161614] rounded-full block" />
          <span className="w-[24px] h-[4px] bg-[#161614] rounded-full block" />
          <span className="w-[20px] h-[4px] bg-[#161614] rounded-full block" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          background: 'rgb(251,248,233)',
          padding: '80px 20px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          zIndex: 99,
        }}>
          {navLinks.map(l => (
            <Link key={l.label} href={l.href} style={{
              fontFamily: '"Boldonse",sans-serif',
              fontSize: 20,
              color: 'rgb(19,109,245)',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="#" style={{
            fontFamily: '"Boldonse",sans-serif',
            fontSize: 20,
            color: 'rgb(237,93,58)',
          }}>
            Let&apos;s Talk →
          </Link>
        </div>
      )}


    </nav>
  )
}

'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 40)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
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

  const allMobileLinks = [
    { label: 'Homepage', href: '/' },
    { label: 'About', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'Work Details', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Service Details', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'Blogs Details', href: '#' },
    { label: 'Terms and conditions', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Contact', href: '#' },
    { label: '404', href: '#' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-[20px] pt-[16px] md:px-[30px] transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div
          className="w-full max-w-[1408px] bg-[#fbf8e9] rounded-[40px] md:rounded-[56px] px-[24px] py-[24px] md:px-[50px] md:py-[32px] flex flex-col transition-shadow duration-300 relative z-50 overflow-hidden"
          style={{ boxShadow: (scrolled || mobileOpen) ? '0 4px 40px rgba(0,0,0,0.12)' : 'none' }}
        >
          {/* Main Header Row */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <img
                src="/ihTtbR2rDfjiVzSUaS37G4MPbms.svg"
                alt="Zentra"
                width={133}
                height={39}
                className="block w-[94px] h-[28px] md:w-[133px] md:h-[39px]"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-[24px] lg:gap-[40px]">
              {navLinks.map(l => (
                <Link key={l.label} href={l.href} className="font-boldonse text-[16px] lg:text-[18px] text-[#1442d5] hover:opacity-80 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="#" className="hidden md:inline-flex items-center gap-2 font-boldonse text-[20px] text-[#ed5d3a] hover:opacity-80 transition-opacity">
              Let&apos;s Talk
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>

            {/* Hamburger / Toggle */}
            <button
              className="md:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-0 w-[32px] h-[32px] relative"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="flex flex-col gap-[5px] w-full items-end">
                <motion.span
                  animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 9 : 0, width: mobileOpen ? '26px' : '26px' }}
                  className="h-[3.5px] bg-[#161614] rounded-full block"
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  className="w-[24px] h-[3.5px] bg-[#161614] rounded-full block"
                />
                <motion.span
                  animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0, width: mobileOpen ? '26px' : '20px' }}
                  className="h-[3.5px] bg-[#161614] rounded-full block"
                />
              </div>
            </button>
          </div>

          {/* Integrated Mobile Menu Expansion */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-[18px] pt-[40px] pb-[16px]">
                  {allMobileLinks.map(l => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-boldonse text-[24px] text-[#161614] hover:text-[#ed5d3a] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className="font-boldonse text-[24px] text-[#ed5d3a] mt-[10px] flex items-center gap-2"
                  >
                    Let&apos;s Talk
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Background Overlay (Dimming only) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/10 z-[40] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

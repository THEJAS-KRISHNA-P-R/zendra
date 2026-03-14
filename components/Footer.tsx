'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  const studio = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Works', href: '#' },
    { label: 'Work Details', href: '#' },
  ]
  const services = [
    { label: 'SEO Digital Strategy', href: '#' },
    { label: 'Branding & Creative Design', href: '#' },
    { label: 'Social Media Marketing', href: '#' },
    { label: 'Paid Advertising (PPC)', href: '#' },
  ]

  return (
    <footer ref={ref} style={{
      background: 'rgb(19,109,245)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top blue scalloped scroller */}
      <div style={{ position: 'absolute', top: -39, left: 0, right: 0, zIndex: 0, height: 250 }}>
        <ShapeScroller color="rgb(19,109,245)" height={250} />
      </div>

      <div style={{ padding: '100px 30px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 80 }}>
          {/* Top: 4-col links grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}>
            {/* STUDIO links */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0, duration: 1.5 }}
            >
              <h3 className="font-boldonse" style={{ fontSize: 28, textTransform: 'uppercase', color: '#fff', lineHeight: '130%' }}>
                Studio
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {studio.map(l => (
                  <a key={l.label} href={l.href} style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* SERVICES links */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.1, duration: 1.5 }}
            >
              <h3 className="font-boldonse" style={{ fontSize: 28, textTransform: 'uppercase', color: '#fff', lineHeight: '130%' }}>
                Services
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {services.map(l => (
                  <a key={l.label} href={l.href} style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* STUDIO contact */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 1.5 }}
            >
              <h3 className="font-boldonse" style={{ fontSize: 28, textTransform: 'uppercase', color: '#fff', lineHeight: '130%' }}>
                Studio
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff', maxWidth: 146 }}>
                  123 Market St, Los Angeles, CA
                </p>
                <a href="tel:+18005552190" style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                  +1 (800) 555-2190
                </a>
                <a href="mailto:hello@youragency.com" style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                  hello@youragency.com
                </a>
              </div>
            </motion.div>

            {/* Agency scalloped badge + Let's Talk button */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.3, duration: 1.5 }}
            >
              <div style={{
                background: 'rgb(252,206,240)',
                borderRadius: 100,
                padding: '10px 20px',
                fontFamily: '"Boldonse",sans-serif',
                fontSize: 16,
                color: 'rgb(22,22,20)',
              }}>
                Agency
              </div>
            </motion.div>
          </div>

          {/* Bottom: Zentra Studio wordmark + Let's Talk + contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {/* Let's Talk button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <motion.a
                href="#"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 196, height: 92,
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundColor: 'rgb(244,255,119)',
                  WebkitMask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 209 98' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 130.465 90.914 C 143.224 90.914 153.878 83.13 156.439 72.752 C 159.002 83.13 169.655 90.914 182.415 90.914 C 197.086 90.914 208.98 80.624 208.98 67.93 C 208.98 56.891 199.983 47.673 187.988 45.457 C 199.983 43.241 208.98 34.023 208.98 22.984 C 208.98 10.29 197.086 0 182.415 0 C 169.655 0 159.002 7.784 156.439 18.162 C 153.878 7.784 143.224 0 130.465 0 C 117.706 0 107.052 7.784 104.49 18.162 C 101.928 7.784 91.275 0 78.515 0 C 65.756 0 55.102 7.784 52.54 18.162 C 49.979 7.784 39.325 0 26.565 0 C 11.894 0 0 10.29 0 22.984 C 0 34.023 8.997 43.241 20.992 45.457 C 8.997 47.673 0 56.891 0 67.93 C 0 80.624 11.894 90.914 26.565 90.914 C 39.325 90.914 49.979 83.13 52.54 72.752 C 55.102 83.13 65.756 90.914 78.515 90.914 C 91.275 90.914 101.928 83.13 104.49 72.752 C 107.051 83.13 117.706 90.914 130.465 90.914 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`,
                  mask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 209 98' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 130.465 90.914 C 143.224 90.914 153.878 83.13 156.439 72.752 C 159.002 83.13 169.655 90.914 182.415 90.914 C 197.086 90.914 208.98 80.624 208.98 67.93 C 208.98 56.891 199.983 47.673 187.988 45.457 C 199.983 43.241 208.98 34.023 208.98 22.984 C 208.98 10.29 197.086 0 182.415 0 C 169.655 0 159.002 7.784 156.439 18.162 C 153.878 7.784 143.224 0 130.465 0 C 117.706 0 107.052 7.784 104.49 18.162 C 101.928 7.784 91.275 0 78.515 0 C 65.756 0 55.102 7.784 52.54 18.162 C 49.979 7.784 39.325 0 26.565 0 C 11.894 0 0 10.29 0 22.984 C 0 34.023 8.997 43.241 20.992 45.457 C 8.997 47.673 0 56.891 0 67.93 C 0 80.624 11.894 90.914 26.565 90.914 C 39.325 90.914 49.979 83.13 52.54 72.752 C 55.102 83.13 65.756 90.914 78.515 90.914 C 91.275 90.914 101.928 83.13 104.49 72.752 C 107.051 83.13 117.706 90.914 130.465 90.914 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`,
                }} />
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontFamily: '"Boldonse",sans-serif',
                  fontSize: 16,
                  color: 'rgb(22,22,20)',
                  textTransform: 'uppercase',
                }}>
                  Let&apos;s Talk →
                </span>
              </motion.a>

              {/* HELLO@YOURAGENCY.COM email badge */}
              <motion.a
                href="mailto:hello@youragency.com"
                style={{
                  background: 'rgb(237,93,58)',
                  borderRadius: 100,
                  padding: '12px 24px',
                  fontFamily: '"Boldonse",sans-serif',
                  fontSize: 16,
                  color: '#fff',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', bounce: 0.2, delay: 0.3, duration: 2 }}
              >
                HELLO@YOURAGENCY.COM
              </motion.a>
            </div>

            {/* ZENTRA STUDIO ghost text logo */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
            >
              <img
                src="https://framerusercontent.com/images/ntRe7dD4UgelSjpAkXh5nOlusAo.svg"
                alt="ZENTRA STUDIO"
                style={{
                  width: '100%',
                  maxWidth: 1360,
                  opacity: 0.06,
                  filter: 'invert(1)',
                  display: 'block',
                }}
              />
            </motion.div>

            {/* Bottom bar */}
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 20,
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.3, duration: 2 }}
            >
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <a href="#" style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                  Terms & Conditions
                </a>
                <a href="#" style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                  Privacy Policy
                </a>
              </div>
              <p style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: '#fff' }}>
                All Right Reserved @Framerbite
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

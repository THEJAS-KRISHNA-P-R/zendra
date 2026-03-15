'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ShapeScroller from './ShapeScroller'

// ── CSS token values extracted from Framer source ────────────────
const BG    = 'rgb(20, 66, 213)'   // darker blue
const WHITE = 'rgb(255, 255, 255)'  // --token-b3af40bc
const DARK  = 'rgb(22, 22, 20)'     // --token-9646e2aa  (Let's Talk text)
const YELLOW = 'rgb(244, 255, 119)' // --token-3964e8e7
const ORANGE = 'rgb(237, 93, 58)'   // --token-e609bd3c
const PINK   = 'rgb(254, 149, 180)' // --token-a6c5df81

// ── Gear SVG path (hero gear — same Group 4 shape in Framer) ─────
const GEAR_PATH = `M 184.933 299.994 C 195.842 298.111 206.208 305.039 208.757 315.619 C 213.5 314.15 218.147 312.461 222.691 310.579 C 217.843 300.824 221.37 288.888 230.961 283.38 C 240.553 277.869 252.677 280.82 258.719 289.884 C 262.65 286.896 266.442 283.737 270.077 280.412 C 262.189 272.885 261.409 260.457 268.559 252.015 C 275.69 243.576 288.105 242.248 296.885 248.714 C 299.549 244.59 302.025 240.332 304.313 235.961 C 294.322 231.582 289.336 220.171 293.145 209.804 C 296.955 199.454 308.156 193.962 318.615 197.041 C 319.692 192.273 320.56 187.426 321.203 182.508 C 310.301 181.808 301.694 172.786 301.71 161.743 C 301.71 161.693 301.71 161.659 301.71 161.61 C 301.71 161.544 301.71 161.495 301.71 161.429 L 301.71 161.413 C 301.726 150.37 310.348 141.378 321.25 140.695 C 320.618 135.78 319.755 130.938 318.69 126.17 C 316.747 126.734 314.785 127.014 312.853 127.014 C 304.338 127.014 296.336 121.773 293.245 113.334 C 289.466 102.965 294.469 91.554 304.462 87.19 C 302.184 82.814 299.719 78.55 297.062 74.421 C 293.372 77.13 289.04 78.474 284.713 78.474 C 278.76 78.474 272.859 75.953 268.724 71.057 C 261.609 62.602 262.403 50.177 270.302 42.663 C 266.67 39.329 262.884 36.159 258.956 33.165 C 254.976 39.097 248.405 42.427 241.626 42.427 C 238.088 42.427 234.482 41.52 231.193 39.625 C 221.616 34.101 218.121 22.151 222.985 12.408 C 218.449 10.52 213.809 8.828 209.075 7.351 C 206.799 16.745 198.347 23.242 188.848 23.242 C 187.658 23.242 186.435 23.142 185.211 22.928 C 174.315 21.012 166.909 10.988 168.113 0.178 C 165.634 0.066 163.142 0 160.635 0 C 158.183 0 155.744 0.065 153.317 0.172 C 154.501 10.991 147.08 20.995 136.188 22.894 C 134.964 23.108 133.758 23.207 132.567 23.207 C 123.071 23.207 114.618 16.697 112.342 7.302 C 107.606 8.774 102.969 10.465 98.431 12.348 C 103.261 22.104 99.763 34.034 90.174 39.557 C 86.884 41.453 83.295 42.359 79.757 42.359 C 72.977 42.359 66.405 39.014 62.425 33.079 C 58.496 36.072 54.706 39.238 51.07 42.569 C 58.963 50.096 59.74 62.518 52.626 70.957 C 48.493 75.85 42.59 78.374 36.638 78.374 C 32.325 78.374 27.979 77.026 24.287 74.306 C 21.63 78.427 19.164 82.681 16.885 87.047 C 26.87 91.431 31.867 102.837 28.073 113.2 C 24.982 121.621 16.979 126.863 8.465 126.863 C 6.532 126.863 4.567 126.572 2.62 126.002 C 1.55 130.768 0.686 135.613 0.047 140.528 C 10.951 141.212 19.574 150.235 19.559 161.278 C 19.559 172.31 10.912 181.321 0 181.996 C 0.627 186.914 1.488 191.761 2.549 196.531 C 13.032 193.502 24.197 199.025 27.974 209.389 C 31.753 219.757 26.72 231.151 16.726 235.514 C 19 239.896 21.466 244.165 24.121 248.301 C 32.914 241.853 45.327 243.228 52.443 251.681 C 59.558 260.154 58.749 272.579 50.834 280.075 C 54.46 283.411 58.239 286.582 62.157 289.58 C 68.231 280.537 80.365 277.623 89.94 283.163 C 99.515 288.704 102.995 300.652 98.132 310.395 C 102.665 312.286 107.301 313.98 112.031 315.462 C 114.608 304.893 124.992 297.993 135.902 299.909 C 146.794 301.824 154.184 311.859 152.984 322.68 C 155.518 322.798 158.067 322.864 160.63 322.864 C 163.022 322.864 165.398 322.803 167.766 322.699 C 166.62 311.881 174.039 301.878 184.933 299.994 Z`

// ── Cloud mask path (6-bump, all sides) — framer "strategy" shape ─
const CLOUD_VB = '0 0 209 90.914'
const CLOUD_PATH = `M 130.465 90.914 C 143.224 90.914 153.878 83.13 156.439 72.752 C 159.002 83.13 169.655 90.914 182.415 90.914 C 197.086 90.914 208.98 80.624 208.98 67.93 C 208.98 56.891 199.983 47.673 187.988 45.457 C 199.983 43.241 208.98 34.023 208.98 22.984 C 208.98 10.29 197.086 0 182.415 0 C 169.655 0 159.002 7.784 156.439 18.162 C 153.878 7.784 143.224 0 130.465 0 C 117.706 0 107.052 7.784 104.49 18.162 C 101.928 7.784 91.275 0 78.515 0 C 65.756 0 55.102 7.784 52.54 18.162 C 49.979 7.784 39.325 0 26.565 0 C 11.894 0 0 10.29 0 22.984 C 0 34.023 8.997 43.241 20.992 45.457 C 8.997 47.673 0 56.891 0 67.93 C 0 80.624 11.894 90.914 26.565 90.914 C 39.325 90.914 49.979 83.13 52.54 72.752 C 55.102 83.13 65.756 90.914 78.515 90.914 C 91.275 90.914 101.928 83.13 104.49 72.752 C 107.051 83.13 117.706 90.914 130.465 90.914 Z`

function makeMask(vb: string, path: string) {
  const enc = encodeURIComponent(`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg"><path d="${path}"/></svg>`)
  return `url("data:image/svg+xml,${enc}") alpha no-repeat center / 100% 100%`
}

// ── 12-bump horizontal scallop for email badge ────────────────────
// 6 circles along horizontal centre = top+bottom bumps via single-row circles
function emailMask(W: number, H: number) {
  const n = 6, r = H / 2, step = W / n
  const circles = Array.from({ length: n }, (_, i) =>
    `<circle cx="${step * i + step / 2}" cy="${r}" r="${r}" fill="black"/>`
  ).join('')
  const enc = encodeURIComponent(
    `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">` +
    `<rect x="${r}" y="0" width="${W - r * 2}" height="${H}" fill="black"/>` +
    circles + `</svg>`
  )
  return `url("data:image/svg+xml,${enc}") alpha no-repeat center / 100% 100%`
}

// ─────────────────────────────────────────────────────────────────────────────
// #1 DIGITAL MARKETING AGENCY BADGE (Framer: framer-20ukc8 "Tag")
// Gear SVG + white 1.5px ellipse overlay + centred text
// ─────────────────────────────────────────────────────────────────────────────
function AgencyBadge() {
  const W = 220, H = 220
  return (
    <motion.div 
      style={{ position: 'relative', width: W, height: H, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      drag
      dragSnapToOrigin
      dragElastic={0.1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pink gear shape */}
      <svg viewBox="0 0 321.25 322.864" width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <path d={GEAR_PATH} fill={PINK} />
      </svg>
      {/* White ellipse border */}
      <svg viewBox="0 0 321.25 322.864" width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        <ellipse cx={160.625} cy={161.432} rx={110} ry={110} fill="none" stroke={WHITE} strokeWidth={4} />
      </svg>
      {/* Text centered */}
      <p style={{
        position: 'relative', zIndex: 2,
        fontFamily: '"Boldonse", sans-serif',
        fontSize: 15,
        color: WHITE,
        textAlign: 'center',
        lineHeight: 1.3,
        margin: 0,
        maxWidth: 110,
      }}>
        #1 Digital Marketing<br />Agency
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LET'S TALK BUTTON (Framer: framer-1shd0tg-container)
// Yellow cloud mask + "Let's Talk" dark text + arrow
// ─────────────────────────────────────────────────────────────────────────────
function TalkBadge() {
  const W = 206, H = 88
  const mask = makeMask(CLOUD_VB, CLOUD_PATH)
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-32px',
        left: '20%',
        zIndex: 10,
        rotate: -4,
        width: W,
        height: H,
        display: 'block',
      }}
      drag
      dragSnapToOrigin
      dragElastic={0.1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href="/contact"
        style={{
          textDecoration: 'none',
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
      >
        {/* Yellow cloud background */}
        <motion.div 
          style={{ position: 'absolute', inset: 0, backgroundColor: YELLOW, WebkitMask: mask, mask }} 
          whileHover={{ backgroundColor: PINK }}
        />
        {/* Centred content */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex', alignItems: 'center', gap: 8,
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            fontFamily: '"Boldonse", sans-serif',
            fontSize: 15,
            color: DARK,
            letterSpacing: '0.04em',
          }}>
            Let&apos;s Talk
          </span>
          <svg width="18" height="14" viewBox="0 0 24 18" fill="none">
            <line x1="0" y1="9" x2="20" y2="9" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" />
            <polyline points="13,2 21,9 13,16" fill="none" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL BADGE (Framer: framer-dwyjoh-container — draggable)
// Orange 12-bump scallop + "hello@youragency.com" underlined white link
// ─────────────────────────────────────────────────────────────────────────────
function EmailBadge() {
  const W = 308, H = 66
  const mask = emailMask(W, H)
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-18px',
        left: '60%',
        zIndex: 10,
        rotate: 2,
        width: W,
        height: H,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      drag
      dragSnapToOrigin
      dragElastic={0.1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Orange 12-bump background */}
      <motion.div 
        style={{ position: 'absolute', inset: 0, backgroundColor: ORANGE, WebkitMask: mask, mask }} 
        whileHover={{ backgroundColor: PINK }}
      />
      {/* Text */}
      <a
        href="mailto:hello@youragency.com"
        style={{
          position: 'relative', zIndex: 1,
          fontFamily: '"Boldonse", sans-serif',
          fontSize: 12,
          color: WHITE,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
          whiteSpace: 'nowrap',
        }}
      >
        hello@youragency.com
      </a>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STAR (Framer: framer-1f1emef-container — translate(-50%,-50%))
// ─────────────────────────────────────────────────────────────────────────────
function StarIcon() {
  return (
    <div style={{
      position: 'absolute',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 5,
      opacity: 0.77,
    }}>
      <svg width="20" height="20" viewBox="0 0 88 88" fill={WHITE}>
        <path d="M 88 48 L 58.928 48 L 84.105 62.536 L 80.105 69.464 L 54.928 54.928 L 69.464 80.105 L 62.536 84.105 L 48 58.928 L 48 88 L 40 88 L 40 58.928 L 25.464 84.105 L 18.536 80.105 L 33.072 54.928 L 7.895 69.464 L 3.895 62.536 L 29.072 48 L 0 48 L 0 40 L 29.072 40 L 3.895 25.464 L 7.895 18.536 L 33.072 33.072 L 18.536 7.895 L 25.464 3.895 L 40 29.072 L 40 0 L 48 0 L 48 29.072 L 62.536 3.895 L 69.464 7.895 L 54.928 33.072 L 80.105 18.536 L 84.105 25.464 L 58.928 40 L 88 40 Z" />
      </svg>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const studioLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Works', href: '/work' },
  { label: 'Work Details', href: '/work/astra-glow' },
]
const serviceLinks = [
  { label: 'SEO Digital Strategy', href: '/services/seo-digital-strategy' },
  { label: 'Branding & Creative Design', href: '/services/branding-creative-design' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { label: 'Paid Advertising (PPC)', href: '/services/paid-advertising' },
]

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export default function Footer() {
  // framer-styles-preset-zzykjl → Boldonse uppercase white
  const heading: React.CSSProperties = {
    fontFamily: '"Boldonse", sans-serif',
    fontSize: 20,
    color: WHITE,
    textTransform: 'uppercase',
    margin: '0 0 20px 0',
    letterSpacing: '0.02em',
  }

  // framer-styles-preset-1jxiwfd → Inter white
  const navLink: React.CSSProperties = {
    color: WHITE,
    textDecoration: 'none',
    fontFamily: '"Clash Grotesk", sans-serif',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
    display: 'block',
  }

  const footLink: React.CSSProperties = {
    color: WHITE,
    textDecoration: 'none',
    fontFamily: '"Clash Grotesk", sans-serif',
    fontSize: 14,
    fontWeight: 500,
  }

  return (
    <footer style={{ backgroundColor: BG, position: 'relative', width: '100%' }}>

      {/* ── Scalloped top: white bumps pointing down into the blue footer ── */}
      {/* Matches the framer-f4709s-container ShapeScroller at top */}
      <ShapeScroller color="white" height={44} direction="down" gap={14} />

      {/* ── framer-nttrsa: main container ── */}
      <div style={{ width: '100%' }}>

        {/* ── framer-1jtcbys → framer-hwdti7: top columns ── */}
        <div className="footer-grid" style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 40px) clamp(32px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr 1fr auto',
          gap: 'clamp(24px, 3vw, 32px)',
          alignItems: 'start',
        }}>

          {/* Col 1 — framer-1owp0qq: studio links */}
          <div>
            <h3 style={heading}>studio</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {studioLinks.map(l => (
                <Link key={l.href} href={l.href} style={navLink}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Col 2 — framer-154ozhc: services links */}
          <div>
            <h3 style={heading}>Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} style={navLink}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Col 3 — framer-4jv05w: contact */}
          <div>
            <h3 style={heading}>studio</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="https://www.google.com/maps/place/Los+Angeles,+CA,+USA/@34.0206084,-118.7413745,10z"
                target="_blank" rel="noopener noreferrer"
                style={navLink}
              >
                123 Market St, Los Angeles, CA
              </a>
              <a href="tel:+1 (800) 555-2190" rel="noopener" style={navLink}>
                +1 (800) 555-2190
              </a>
              <a href="mailto:hello@youragency.com" rel="noopener" style={navLink}>
                hello@youragency.com
              </a>
            </div>
          </div>

          {/* Col 4 — framer-wral01: "Tag" — gear badge, scale 0.84784 */}
          <div className="footer-agency-badge" style={{ transform: 'scale(0.848)', transformOrigin: 'center center' }}>
            <AgencyBadge />
          </div>
        </div>

        {/* ── framer-u2csn9: Bottom Content ── */}
        <div style={{ width: '100%' }}>

          {/* framer-z5r3r1: Title — LET'S TALK button + wordmark */}
          <div className="footer-wordmark-wrapper" style={{ position: 'relative', width: '100%', lineHeight: 0, padding: '0 60px', boxSizing: 'border-box' }}>

            {/* framer-1r7y6wt-container: ZENTRA STUDIO wordmark — no padding, flush width */}
            <a href="/" style={{ display: 'block', lineHeight: 0, fontSize: 0 }}>
              <img
                src="/ntRe7dD4UgelSjpAkXh5nOlusAo.svg"
                alt="Zentra Studio"
                width={1360}
                height={188}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                  userSelect: 'none',
                  margin: 0,
                  padding: 0,
                }}
              />
            </a>

            {/* Floating footer badges — hidden on mobile */}
            <div className="footer-float-badges">
              {/* framer-1shd0tg-container: LET'S TALK yellow cloud, absolute over wordmark */}
              <TalkBadge />

              {/* framer-1f1emef-container: star, centered, absolute */}
              <StarIcon />

              {/* framer-dwyjoh-container: email badge, draggable, absolute */}
              <EmailBadge />
            </div>
          </div>

          {/* framer-15h3puh: Hero Bottom — bottom bar */}
          <div style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '20px 40px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            {/* framer-1gtv5kj: bottom menu items */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <Link href="/legal/terms" style={footLink}>Terms &amp; Conditions</Link>
              <Link href="/legal/privacy" style={footLink}>Privacy Policy</Link>
            </div>
            {/* framer-107ivau: copyright */}
            <p style={{ ...footLink, margin: 0 }}>
              All Right Reserved @<a href="https://framerbite.com/" target="_blank" rel="noopener" style={footLink}>Framerbite</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet: 2-column footer grid */
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            padding: 50px 30px 40px !important;
          }
          .footer-wordmark-wrapper {
            padding: 0 30px !important;
          }
        }
        /* Mobile: single-column footer grid, hide floating badges */
        @media (max-width: 767.98px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 20px 32px !important;
            gap: 32px !important;
          }
          .footer-float-badges {
            display: none !important;
          }
          .footer-agency-badge {
            display: none !important;
          }
          .footer-wordmark-wrapper {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </footer>
  )
}
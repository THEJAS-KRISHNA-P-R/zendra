'use client'
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'

function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={{ ...style, display: 'inline-block', flexWrap: 'wrap' }}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: wordIdx < words.length - 1 ? '0.3em' : 0 }}>
          {word.split('').map((char, i) => {
            const charIdx = wordIdx * 10 + i;
            return (
              <motion.span
                key={i}
                style={{ display: 'inline-block', willChange: 'transform' }}
                initial={{ opacity: 0.001, filter: 'blur(12px)', scale: 1.2 }}
                animate={inView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
                transition={{ delay: charIdx * 0.04, duration: 0.5, ease: 'easeOut' }}
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

// Badge from DOM: color bg, Boldonse text, framer-pXwkQ bumpy cloud shape
function Badge({
  label, bg, color = '#fff', rotate = 0, y = 800, delay = 0.2,
  style, className
}: {
  label: string; bg: string; color?: string; rotate?: number; y?: number; delay?: number; style?: React.CSSProperties; className?: string
}) {
  const badgeMask = `url("data:image/svg+xml,%3Csvg viewBox='0 0 207 109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 77.721 0 C 65.09 0 54.544 9.257 52.009 21.597 C 49.473 9.257 38.927 0 26.297 0 C 11.773 0 0 12.237 0 27.332 C 0 40.459 8.906 51.42 20.779 54.056 C 8.906 56.691 0 67.652 0 80.78 C 0 95.875 11.773 108.112 26.297 108.112 C 38.927 108.112 49.473 98.855 52.009 86.514 C 54.544 98.855 65.09 108.112 77.721 108.112 C 90.351 108.112 100.897 98.855 103.432 86.514 C 105.968 98.855 116.514 108.112 129.144 108.112 C 141.775 108.112 152.32 98.855 154.856 86.514 C 157.392 98.855 167.938 108.112 180.569 108.112 C 195.091 108.112 206.865 95.875 206.865 80.78 C 206.865 67.652 197.959 56.691 186.086 54.056 C 197.959 51.42 206.865 40.459 206.865 27.332 C 206.865 12.237 195.091 0 180.569 0 C 167.938 0 157.392 9.257 154.856 21.597 C 152.32 9.257 141.775 0 129.144 0 C 116.514 0 105.968 9.257 103.432 21.597 C 100.898 9.257 90.351 0 77.721 0 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`

  return (
    <motion.div
      className={className}
      style={{ position: 'absolute', ...style, zIndex: 1 }}
      initial={{ opacity: 0.001, y, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 2 }}
    >
      <div style={{
        position: 'relative',
        width: 174,
        height: 94,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: bg,
          WebkitMask: badgeMask,
          mask: badgeMask,
        }} />
        <span style={{
          position: 'relative', zIndex: 1,
          fontFamily: '"Boldonse",sans-serif',
          fontSize: 16,
          fontWeight: 400,
          color,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      className="max-md:pt-[145px] max-md:px-[20px] max-md:pb-[50px] pt-[226px] px-[30px] pb-[80px] flex flex-col items-center gap-5 relative z-10"
      style={{
        backgroundColor: 'rgb(19,109,245)',
        overflow: 'visible',
      }}
    >
      {/* Dot texture overlay */}
      <div className="dot-texture" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Halftone BG image */}
      <img
        src="/AWMIgWK3TKYddF2nKX23L8sYM.png"
        alt=""
        style={{
          position: 'absolute',
          top: '20%', left: '50%',
          transform: 'translateX(-50%)',
          width: '94%', maxWidth: 1273,
          opacity: 0.6,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Container */}
      <div className="relative z-[2] w-full max-w-[1360px] flex flex-col items-center gap-[290px] max-md:items-start max-md:gap-[40px]">
        {/* HERO TITLE row */}
        <div style={{ width: '100%', position: 'relative' }}>
          {/* BRANDING badge — top:-5%, left:70% */}
          <Badge
            className="max-md:!hidden"
            label="BRANDING"
            bg="rgb(237,93,58)"
            color="#fff"
            rotate={12}
            delay={0.2}
            style={{ top: '-5%', left: '70%', transform: 'translate(-50%,-50%)' }}
          />
          {/* MARKETING badge — top:41%, left:50% */}
          <Badge
            className="max-md:!hidden"
            label="MARKETING"
            bg="rgb(55,182,105)"
            color="#fff"
            rotate={-10}
            delay={0.25}
            style={{ top: '41%', left: '50%', transform: 'translate(-50%,-50%)' }}
          />
          {/* STRATEGY badge — top:61%, left:88% */}
          <Badge
            className="max-md:!hidden"
            label="STRATEGY"
            bg="rgb(244,255,119)"
            color="rgb(22,22,20)"
            rotate={12}
            delay={0.3}
            style={{ top: '61%', left: '88%', transform: 'translate(-50%,-50%)' }}
          />

          {/* Main H1 — letter animation */}
          <h1 className="font-boldonse text-[34px] leading-[120%] tracking-normal md:text-[68px] md:leading-[130%] xl:text-[125px] xl:leading-[130%] uppercase text-white max-md:text-left text-center">
            <AnimatedText text="MAKE YOUR BRAND MEMORABLE" className="max-w-[800px] md:max-w-none" />
          </h1>
        </div>

        {/* HERO BOTTOM row — "brand new waves." + CTA + description */}
        <div className="w-full flex justify-between max-md:flex-col max-md:items-start md:items-end max-md:gap-5 md:gap-[36px]">
          {/* Left: tagline + CTA */}
          <div className="flex flex-1 max-md:flex-col max-md:items-start md:items-center max-md:gap-4 md:gap-[36px] md:max-w-[354px]">
            <motion.h4
              className="font-boldonse max-md:!max-w-none max-md:text-left text-center"
              style={{ fontSize: 'clamp(18px,2vw,24px)', color: '#fff', maxWidth: 96 }}
              initial={{ opacity: 0.001, y: 800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
            >
              brand new waves.
            </motion.h4>

            <motion.a
              href="#"
              style={{
                background: '#fff',
                borderRadius: 100,
                padding: '16px 28px',
                fontFamily: '"Boldonse",sans-serif',
                fontSize: 20,
                color: 'rgb(19,109,245)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
              initial={{ opacity: 0.001, y: 800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.25, duration: 2 }}
            >
              Let&apos;s Talk <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 4 }}><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </div>

          {/* Right: description */}
          <motion.p
            className="flex-1 max-md:!text-left max-md:mt-4 md:text-right md:max-w-[339px]"
            style={{
              fontFamily: '"Clash Grotesk",sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px,1.4vw,20px)',
              color: '#fff',
            }}
            initial={{ opacity: 0.001, y: 800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, delay: 0.3, duration: 2 }}
          >
            We craft strategies that turn clicks into customers and campaigns into lasting brand stories.
          </motion.p>
        </div>
      </div>

      {/* Robot illustration — from x:-600 spring */}
      <motion.div
        className="max-md:!hidden"
        style={{
          position: 'absolute',
          top: '65%', left: '20%',
          transform: 'translate(-50%,-50%)',
          width: '17%',
          maxWidth: 326,
          zIndex: 3,
        }}
        initial={{ opacity: 0.001, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2, delay: 0.3, duration: 2 }}
      >
        {/* Actual robot SVG character image */}
        <div style={{ width: '100%', aspectRatio: '0.953' }}>
          <img
            src="/zrobo1.svg"
            alt="Character"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </motion.div>

      {/* Asterisk (framer-1v4vy65) */}
      <motion.div
        className="max-md:!hidden"
        style={{
          position: 'absolute',
          top: '64%', left: '66%',
          transform: 'translate(-50%,-50%)',
          zIndex: 1,
          color: '#fff',
          fontSize: 30,
          userSelect: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        ✳
      </motion.div>

      {/* Gear badge (framer-1i9mwys) — pink gear at top:74%, left:60% */}
      <motion.div
        className="max-md:!hidden"
        style={{
          position: 'absolute',
          top: '74%', left: '60%',
          transform: 'translate(-50%,-50%)',
          zIndex: 2,
          width: 230, height: 230,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Circular rotating gear */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Outer ring */}
          <div style={{
            position: 'absolute', inset: 0,
            border: '1.5px solid rgba(255,255,255,0.6)',
            borderRadius: '50%',
          }} />
          {/* Inner ring */}
          <div style={{
            position: 'absolute', inset: 36,
            border: '1.5px solid rgba(255,255,255,0.6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="https://framerusercontent.com/images/07rL7lnrogVh2WkRDFATyBE7hzA.png"
              alt="Gear icon"
              style={{ width: 88, height: 88, objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          {/* Rotating text ring */}
          <svg
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              animation: 'spin 14s linear infinite',
            }}
            viewBox="0 0 230 230"
          >
            <defs>
              <path id="gear-text-path" d="M 115,115 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text
              style={{ fontSize: 11, fontFamily: '"Boldonse",sans-serif', fill: '#fff', letterSpacing: 3 }}
            >
              <textPath href="#gear-text-path">
                AWARD WINER DIGITAL AGENCY •
              </textPath>
            </text>
          </svg>
        </div>
      </motion.div>

      {/* Bottom shape scroller — blue shapes at section transition */}
      <div className="absolute left-0 right-0 h-[250px] z-0 pointer-events-none" style={{ bottom: -36 }}>
        <ShapeScroller color="rgb(19,109,245)" height={250} />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

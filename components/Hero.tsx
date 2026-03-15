'use client'
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'

function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap', justifyContent: 'inherit' }}>
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
      className="w-full max-md:pt-[145px] max-md:px-[20px] max-md:pb-[50px] pt-[226px] px-[30px] pb-[80px] flex flex-col items-center gap-5 relative z-10"
      style={{
        backgroundColor: 'rgb(19,109,245)',
        overflow: 'hidden',
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
            <AnimatedText text="MAKE YOUR BRAND MEMORABLE" className="w-full md:max-w-none" />
          </h1>
        </div>

        {/* HERO BOTTOM row — "brand new waves." + CTA + description */}
        <div className="w-full flex justify-between max-md:flex-col max-md:items-start md:items-end max-md:gap-5 md:gap-[36px]">
          {/* Left: tagline + CTA */}
          <div className="flex flex-1 max-md:flex-col max-md:items-start md:items-center max-md:gap-4 md:gap-[36px] md:max-w-[354px]">
            <motion.h4
              className="font-boldonse max-md:!max-w-none max-md:text-left text-left"
              style={{ fontSize: 'clamp(18px,2vw,24px)', color: '#fff', maxWidth: 96 }}
              initial={{ opacity: 0.001, y: 800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
            >
              BRAND NEW WAVES.
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
              Let&apos;s Talk <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 4 }}><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
      {/* Gear badge (framer-1i9mwys) — Pixel-Perfect Square Implementation */}
      {/* Gear badge (framer-1i9mwys) — Definitive Fix for Teeth and Centering */}
      <motion.div
        className="max-md:!hidden"
        style={{
          position: 'absolute',
          top: '64%', left: '50%',
          transform: 'translate(-50%,-50%)',
          zIndex: 2,
          width: 320, height: 320, // Square container for the unified viewBox
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* 1. Pink Jagged Gear Background - CCW Rotation */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 321.25 322.864"
            style={{ position: 'absolute' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {/* DEFINITIVE PATH: Fixed coordinate typos and ensures closure */}
            <path d="M 184.933 299.994 C 195.842 298.111 206.208 305.039 208.757 315.619 C 213.5 314.15 218.147 312.461 222.691 310.579 C 217.843 300.824 221.37 288.888 230.961 283.38 C 240.553 277.869 252.677 280.82 258.719 289.884 C 262.65 286.896 266.442 283.737 270.077 280.412 C 262.189 272.885 261.409 260.457 268.559 252.015 C 275.69 243.576 288.105 242.248 296.885 248.714 C 299.549 244.59 302.025 240.332 304.313 235.961 C 294.322 231.582 289.336 220.171 293.145 209.804 C 296.955 199.454 308.156 193.962 318.615 197.041 C 319.692 192.273 320.56 187.426 321.203 182.508 C 310.301 181.808 301.694 172.786 301.71 161.743 C 301.71 161.693 301.71 161.659 301.71 161.61 C 301.71 161.544 301.71 161.495 301.71 161.429 L 301.71 161.413 C 301.726 150.37 310.348 141.378 321.25 140.695 C 320.618 135.78 319.755 130.938 318.69 126.17 C 316.747 126.734 314.785 127.014 312.853 127.014 C 304.338 127.014 296.336 121.773 293.245 113.334 C 289.466 102.965 294.469 91.554 304.462 87.19 C 302.184 82.814 299.719 78.55 297.062 74.421 C 293.372 77.13 289.04 78.474 284.713 78.474 C 278.76 78.474 272.859 75.953 268.724 71.057 C 261.609 62.602 262.403 50.177 270.302 42.663 C 266.67 39.329 262.884 36.159 258.956 33.165 C 254.976 39.097 248.405 42.427 241.626 42.427 C 238.088 42.427 234.482 41.52 231.193 39.625 C 221.616 34.101 218.121 22.151 222.985 12.408 C 218.449 10.52 213.809 8.828 209.075 7.351 C 206.799 16.745 198.347 23.242 188.848 23.242 C 187.658 23.242 186.435 23.142 185.211 22.928 C 174.315 21.012 166.909 10.988 168.113 0.178 C 165.634 0.066 163.142 0 160.635 0 C 158.183 0 155.744 0.065 153.317 0.172 C 154.501 10.991 147.08 20.995 136.188 22.894 C 134.964 23.108 133.758 23.207 132.567 23.207 C 123.071 23.207 114.618 16.697 112.342 7.302 C 107.606 8.774 102.969 10.465 98.431 12.348 C 103.261 22.104 99.763 34.034 90.174 39.557 C 86.884 41.453 83.295 42.359 79.757 42.359 C 72.977 42.359 66.405 39.014 62.425 33.079 C 58.496 36.072 54.706 39.238 51.07 42.569 C 58.963 50.096 59.74 62.518 52.626 70.957 C 48.493 75.85 42.59 78.374 36.638 78.374 C 32.325 78.374 27.979 77.026 24.287 74.306 C 21.63 78.427 19.164 82.681 16.885 87.047 C 26.87 91.431 31.867 102.837 28.073 113.2 C 24.982 121.621 16.979 126.863 8.465 126.863 C 6.532 126.863 4.567 126.572 2.62 126.002 C 1.55 130.768 0.686 135.613 0.047 140.528 C 10.951 141.212 19.574 150.235 19.559 161.278 C 19.559 172.31 10.912 181.321 0 181.996 C 0.627 186.914 1.488 191.761 2.549 196.531 C 13.032 193.502 24.197 199.025 27.974 209.389 C 31.753 219.757 26.72 231.151 16.726 235.514 C 19 239.896 21.466 244.165 24.121 248.301 C 32.914 241.853 45.327 243.228 52.443 251.681 C 59.558 260.154 58.749 272.579 50.834 280.075 C 54.46 283.411 58.239 286.582 62.157 289.58 C 68.231 280.537 80.365 277.623 89.94 283.163 C 99.515 288.704 102.995 300.652 98.132 310.395 C 102.665 312.286 107.301 313.98 112.031 315.462 C 114.608 304.893 124.992 297.993 135.902 299.909 C 146.794 301.824 154.184 311.859 152.984 322.68 C 155.518 322.798 158.067 322.864 160.63 322.864 C 163.022 322.864 165.398 322.803 167.766 322.699 C 166.62 311.881 174.039 301.878 184.933 299.994 Z" fill="rgb(254, 149, 180)" />
          </motion.svg>

          {/* 2. TWO CONCENTRIC THIN WHITE RINGS (Unified viewBox for perfect alignment) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 321.25 322.864">
            {/* Outer ring - Centered at 160.6, 161.4 - Resized by 30% (102 -> 132.6) */}
            <circle cx="160.625" cy="161.432" r="120.6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
            {/* Inner ring - Centered at 160.6, 161.4 - Resized by 30% (72 -> 93.6) */}
            <circle cx="160.625" cy="161.432" r="85.6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
          </svg>

          {/* 3. Central Starburst Icon - Pulsing Animation */}
          <motion.svg
            width="90"
            height="90"
            viewBox="0 0 88 88"
            style={{ position: 'absolute', zIndex: 1 }}
          >
            <path d="M 88 48 L 58.928 48 L 84.105 62.536 L 80.105 69.464 L 54.928 54.928 L 69.464 80.105 L 62.536 84.105 L 48 58.928 L 48 88 L 40 88 L 40 58.928 L 25.464 84.105 L 18.536 80.105 L 33.072 54.928 L 7.895 69.464 L 3.895 62.536 L 29.072 48 L 0 48 L 0 40 L 29.072 40 L 3.895 25.464 L 7.895 18.536 L 33.072 33.072 L 18.536 7.895 L 25.464 3.895 L 40 29.072 L 40 0 L 48 0 L 48 29.072 L 62.536 3.895 L 69.464 7.895 L 54.928 33.072 L 80.105 18.536 L 84.105 25.464 L 58.928 40 L 88 40 Z" fill="white" />
          </motion.svg>

          {/* 4. Rotating Text Ring - CW Rotation, Aligned between rings */}
          <motion.svg
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            viewBox="0 0 321.25 322.864"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
          >
            <defs>
              {/* Radius resized by 30% (87 -> 113.1) sits perfectly between R=132.6 and R=93.6 circles */}
              <path id="gear-text-path-final" d="M 160.625,161.432 m -97.1,0 a 97.1,97.1 0 1,1 194.2,0 a 97.1,97.1 0 1,1 -194.2,0" />
            </defs>
            <text
              style={{
                fontSize: '14.6px',
                fontFamily: 'sans-serif',
                fill: '#fff',
                letterSpacing: 2.2,
                textTransform: 'uppercase'
              }}
            >
              <textPath href="#gear-text-path-final">
                AWARD WINNER DIGITAL AGENCY AWARD WINNER DIGITAL AGENCY
              </textPath>
            </text>
          </motion.svg>
        </div>
      </motion.div>

      {/* Bottom shape scroller — blue shapes at section transition */}
      <div className="absolute left-0 right-0 w-full h-[250px] z-0 pointer-events-none" style={{ bottom: -36 }}>
        <ShapeScroller color="rgb(19,109,245)" height={250} />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

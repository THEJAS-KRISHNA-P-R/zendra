'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref} style={{ ...style, display: 'inline' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          initial={{ opacity: 0.001, filter: 'blur(12px)', scale: 1.2 }}
          animate={inView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
          transition={{ delay: i * 0.04, duration: 0.5 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} style={{
      background: 'rgb(255,255,255)',
      padding: '160px 30px 74px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'visible',
    }}>
      <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative' }}>

        {/* Decorative elements row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '88%',
          position: 'absolute',
          top: 92, left: '52%',
          transform: 'translateX(-50%)',
        }}>
          {/* BRANDING badge */}
          <Badge
            label="BRANDING"
            bg="rgb(237,93,58)"
            color="#fff"
            delay={0.2}
            drag={false}
            style={{ position: 'relative' }}
          />
          {/* MARKETING badge */}
          <Badge
            label="MARKETING"
            bg="rgb(55,182,105)"
            color="#fff"
            delay={0.3}
            drag={false}
            style={{ position: 'relative' }}
          />
        </div>

        {/* Main CTA heading */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          {/* Decorative scribbles */}
          <div style={{ position: 'absolute', top: -66, left: '48%', width: '69%', display: 'flex', justifyContent: 'space-between', transform: 'translateX(-50%)' }}>
            <svg width="66" height="86" viewBox="0 0 88 113" style={{ opacity: 0.6 }}>
              <path d="M 32.804 37.346 L 23.759 28.755 L 0 14.445 L 15.532 0 L 27.795 24.047 L 37.263 33.93 Z" fill="rgb(254,149,180)" transform="translate(44.66 61.155)" />
            </svg>
            <svg width="44" height="44" viewBox="0 0 44 44" style={{ opacity: 0.7 }}>
              <path d="M 22 0 L 27 17 L 44 22 L 27 27 L 22 44 L 17 27 L 0 22 L 17 17 Z" fill="rgb(22,22,20)" />
            </svg>
          </div>

          <h2 className="font-boldonse" style={{
            fontSize: 'clamp(26px,5.5vw,80px)',
            textTransform: 'uppercase',
            letterSpacing: 'clamp(-1px,-0.3vw,-4px)',
            color: 'rgb(22,22,20)',
            maxWidth: 991,
          }}>
            <AnimatedText text="Let's Grow Brand Together" />
          </h2>
        </div>

        {/* CTA button (pink — exact from DOM: framer-1nnaf6a) */}
        <motion.div
          style={{ marginTop: 40, position: 'relative' }}
          initial={{ opacity: 0.001, y: 800 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
        >
          <a href="#" style={{
            background: 'rgb(252,206,240)',
            borderRadius: 100,
            padding: '20px 30px',
            fontFamily: '"Boldonse",sans-serif',
            fontSize: 20,
            color: 'rgb(22,22,20)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            textDecoration: 'none',
          }}>
            Get Started →
          </a>
        </motion.div>

        {/* Asterisk */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          fontSize: 24, color: 'rgb(22,22,20)',
          opacity: 0.5,
        }}>
          ✳
        </div>
      </div>
    </section>
  )
}

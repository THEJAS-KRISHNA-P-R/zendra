'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'
import Link from 'next/link'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref} style={{ ...style, display: 'inline' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          initial={{ opacity: 0.001, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.01, duration: 0.3, ease: 'easeOut' }}
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
    <section ref={ref} className="cta-section" style={{
      background: 'rgb(255,255,255)',
      padding: 'clamp(80px, 10vw, 160px) clamp(20px, 5vw, 30px) clamp(50px, 6vw, 74px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'visible',
    }}>
      <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative' }}>

        {/* Floating Badges */}
        <div className="cta-float-badges" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          <Badge
            label="BRANDING"
            bg="rgb(20,66,213)"
            color="#fff"
            rotate={0}
            delay={0.2}
            shape="flatPill"
            style={{ position: 'absolute', top: '30%', left: '10%', pointerEvents: 'auto' }}
          />
          <Badge
            label="MARKETING"
            bg="rgb(55,182,105)"
            color="#fff"
            rotate={0}
            delay={0.3}
            shape="flatPill"
            style={{ position: 'absolute', top: '30%', right: '8%', pointerEvents: 'auto' }}
          />
        </div>

        {/* Main CTA heading */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          {/* Decorative scribbles */}
          <div className="cta-scribbles" style={{ position: 'absolute', top: -66, left: '48%', width: '69%', display: 'flex', justifyContent: 'space-between', transform: 'translateX(-50%)' }}>
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
            letterSpacing: 'clamp(-3px,-0.3vw,-4px)',
            color: 'rgb(22,22,20)',
            maxWidth: 991,
          }}>
            <AnimatedText text="Let's Grow Brand" />
          </h2>
          <h2 className="font-boldonse" style={{
            fontSize: 'clamp(26px,5.5vw,80px)',
            textTransform: 'uppercase',
            letterSpacing: 'clamp(-3px,-0.3vw,-4px)',
            color: 'rgb(22,22,20)',
            maxWidth: 991,
            lineHeight: '110%',
          }}>
            <AnimatedText text="Together" />
          </h2>

        </div>

        {/* CTA button (pink — exact from DOM: framer-1nnaf6a) */}
        <motion.div
          style={{ position: 'relative' }}
          initial={{ opacity: 0.001, y: 800 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
        >
          <Link href="#" style={{
            background: 'rgb(252,206,240)',
            borderRadius: 100,
            padding: '30px 30px',
            fontFamily: '"Boldonse",sans-serif',
            fontSize: 20,
            color: 'rgb(22,22,20)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            textDecoration: 'none',
          }}>
            Get Started →
          </Link>
        </motion.div>

        {/* Asterisk */}

      </div>

      <style>{`
        @media (max-width: 767.98px) {
          .cta-section { padding: 80px 20px 50px !important; }
          .cta-float-badges { display: none !important; }
          .cta-scribbles { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .cta-section { padding: 100px 30px 60px !important; }
        }
      `}</style>
    </section>
  )
}

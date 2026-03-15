'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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

export default function QuoteBanner() {
  return (
    <section style={{
      background: 'rgb(255,255,255)',
      padding: '115px 30px 180px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Pink blob SVGs from DOM — framer-mylqjb */}
      <div style={{
        position: 'absolute',
        bottom: 200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 782,
        height: 783,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        {/* Small blob left (393x393) */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 393, height: 393 }}>
          <svg viewBox="0 0 393 393" style={{ width: '100%', height: '100%' }}>
            <path
              d="M 5.802 5.803 C -15.897 27.502 25.148 103.729 97.48 176.061 C 169.811 248.392 246.038 289.437 267.738 267.738 C 289.437 246.038 248.392 169.811 176.061 97.48 C 103.729 25.148 27.502 -15.897 5.802 5.803 Z"
              fill="rgb(252,206,240)"
              transform="scale(1.43)"
            />
          </svg>
        </div>
        {/* Large blob center (587x587) */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 587, height: 587 }}>
          <svg viewBox="0 0 420 420" style={{ width: '100%', height: '100%' }}>
            <path
              d="M 281.395 138.081 C 390.227 246.913 446.37 367.22 406.795 406.795 C 367.22 446.371 246.913 390.228 138.081 281.396 C 29.25 172.564 -26.894 52.256 12.682 12.681 C 52.258 -26.894 172.563 29.25 281.395 138.081 Z"
              fill="rgb(252,206,240)"
            />
          </svg>
        </div>
        {/* Small blob right (393x393) */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 393, height: 393 }}>
          <svg viewBox="0 0 122 122" style={{ width: '100%', height: '100%' }}>
            <path
              d="M 2.59 2.591 C -7.097 12.278 11.227 46.31 43.52 78.602 C 75.812 110.895 109.843 129.219 119.531 119.531 C 129.219 109.844 110.894 75.812 78.602 43.52 C 46.31 11.227 12.278 -7.097 2.59 2.591 Z"
              fill="rgb(252,206,240)"
            />
          </svg>
        </div>
      </div>

      {/* Quote text */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1238, width: '100%', textAlign: 'center' }}>
        <h1 className="font-boldonse" style={{
          fontSize: 'clamp(26px,5.5vw,80px)',
          lineHeight: '130%',
          textTransform: 'uppercase',
          color: 'rgb(22,22,20)',
          letterSpacing: 'clamp(-1px,-0.3vw,-4px)',
        }}>
          <AnimatedText text="We craft strategies that turn into campaigns lasting brand stories." />
        </h1>
      </div>
    </section>
  )
}

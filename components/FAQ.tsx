'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref} style={{ ...style, display: 'inline' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          initial={{ opacity: 0.001, filter: 'blur(10px)', y: 10 }}
          animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ delay: i * 0.04, duration: 0.5 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

const FAQS = [
  {
    q: 'How soon can I expect to see results?',
    a: 'Most clients start seeing initial improvements within a few weeks, though the exact timeline depends on your goals and the strategy we implement.',
  },
  {
    q: 'How do you start working with a new client?',
    a: 'We begin with a discovery call to understand your business, goals, and challenges. From there, we craft a tailored strategy and present a clear roadmap.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer SEO, branding & creative design, social media marketing, and paid advertising (PPC) — a full suite of digital marketing services.',
  },
  {
    q: 'What makes your agency different?',
    a: 'We combine data-driven strategy with creative excellence. Every campaign is built around your specific goals with full transparency and measurable results.',
  },
  {
    q: 'How do you measure success?',
    a: 'We track KPIs that matter to your business — traffic, conversions, ROI, brand awareness, and more — and provide regular detailed reports.',
  },
]

function FAQItem({ item, index, open, onToggle }: {
  item: typeof FAQS[0]; index: number; open: boolean; onToggle: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      onClick={onToggle}
      style={{
        background: 'rgb(251,248,233)',
        borderRadius: 26,
        padding: open ? '30px 20px' : '25px 20px 30px',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
      initial={{ opacity: 0.001, filter: 'blur(10px)', y: 60 }}
      animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p className="font-boldonse" style={{
          fontSize: 'clamp(16px,1.4vw,20px)',
          textTransform: 'uppercase',
          color: 'rgb(22,22,20)',
          lineHeight: '170%',
        }}>
          {item.q}
        </p>
        <AnimatePresence>
          {open && (
            <motion.p
              style={{
                fontFamily: '"Clash Grotesk",sans-serif',
                fontWeight: 500,
                fontSize: 20,
                color: 'rgb(59,59,59)',
                lineHeight: '130%',
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.a}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {/* Plus/Minus icon */}
      <div style={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: 40, height: 5, background: 'rgb(22,22,20)', borderRadius: 2 }} />
        <motion.div
          style={{ position: 'absolute', width: 40, height: 5, background: 'rgb(22,22,20)', borderRadius: 2 }}
          animate={{ rotate: open ? -90 : 90 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section style={{
      background: 'rgb(255,255,255)',
      padding: '0 30px 5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: 100 }}>
        {/* Title */}
        <div ref={titleRef} style={{ textAlign: 'center', position: 'relative' }}>
          {/* BLOGS badge (from DOM framer-sdus82) — it says BLOGS but shown near FAQ */}
          <motion.div
            style={{ position: 'absolute', top: '14%', left: '89%', transform: 'translate(-50%,-50%)' }}
            initial={{ opacity: 0.001, y: 800 }}
            animate={titleInView ? { opacity: 1, y: 0, rotate: 12 } : {}}
            transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
          >
            <div style={{
              background: 'rgb(237,93,58)',
              borderRadius: 100,
              padding: '8px 18px',
              fontFamily: '"Boldonse",sans-serif',
              fontSize: 14,
              color: '#fff',
              textTransform: 'uppercase',
            }}>
              BLOGS
            </div>
          </motion.div>
          <h2 className="font-boldonse" style={{
            fontSize: 'clamp(26px,4vw,60px)',
            textTransform: 'uppercase',
            color: 'rgb(22,22,20)',
            maxWidth: 1036,
            margin: '0 auto',
          }}>
            <AnimatedText text="Frequently Asked Questions" />
          </h2>
        </div>

        {/* FAQ accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 880, margin: '0 auto', paddingBottom: 5 }}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

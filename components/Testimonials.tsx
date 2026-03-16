'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'
import Image from 'next/image'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <span ref={ref} style={{ ...style, display: 'inline-block', flexWrap: 'wrap' }}>
      {words.map((word, wordIdx) => (
        <span key={`${word}-${wordIdx}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: wordIdx < words.length - 1 ? '0.3em' : 0 }}>
          {word.split('').map((char, i) => {
            const charIdx = wordIdx * 10 + i;
            return (
              <motion.span
                key={`${char}-${i}`}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0.001, filter: 'blur(12px)', scale: 1.2 }}
                animate={inView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
                transition={{ delay: charIdx * 0.04, duration: 0.5 }}
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

const TESTIMONIALS = [
  {
    quote: '"Our brand visibility tripled in just three months!"',
    body: "Working with this agency transformed the way we approach marketing. Their team didn't just promote our products movement.",
    name: 'Mia Johnson', title: 'Co-founder, BrandBoost',
    img: 'https://framerusercontent.com/images/07rL7lnrogVh2WkRDFATyBE7hzA.png',
  },
  {
    quote: '"They understood our goals."',
    body: 'From strategy to execution, the engagement and a successful product launch.',
    name: 'Ryan Mitchell', title: 'CEO, Vistaro',
    img: 'https://framerusercontent.com/images/cR43V4CTirzb30HZzsSYkjkxqE.png',
  },
  {
    quote: '"Our social media came alive."',
    body: 'The team crafted content that actually connects — we saw massive brand.',
    name: 'Ethan Miles', title: 'Founder, Adverly',
    img: 'https://framerusercontent.com/images/sKMsrGcl4pfkimrAoRxCEGMmC0.png',
  },
  {
    quote: '"Finally, an agency that cares about long-term results."',
    body: "We've worked with several agencies in the past, but none matched the precision and transparency of this team.",
    name: 'James Carter', title: 'Head of Growth, Streamora',
    img: 'https://framerusercontent.com/images/07rL7lnrogVh2WkRDFATyBE7hzA.png',
  },
]

function TestiCard({ t, delay = 0 }: { t: typeof TESTIMONIALS[0]; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // Speech bubble tail (framer-wAXJP / framer-wtg1ta)
  const tailMask = `url("data:image/svg+xml,%3Csvg viewBox='0 0 209 137' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 189.598 0 C 219.839 17.688 210.006 44.355 179.767 62.043 L 70.443 125.988 C 39.904 143.851 -9.231 113.807 1.506 86.447 L 33.715 22.504 L 39.441 22.5 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`

  return (
    <motion.div
      ref={ref}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '83px 60px',
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
        position: 'relative',
        flex: 1,
        minWidth: 0,
        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
      }}
      className="testi-card"
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 1.5 }}
      whileHover={{ y: -4, boxShadow: '0px 8px 30px rgba(0,0,0,0.08)' }}
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <h2 className="font-boldonse" style={{
          fontSize: 'clamp(20px,2vw,32px)',
          textTransform: 'uppercase',
          color: 'rgb(22,22,20)',
          lineHeight: '170%',
        }}>
          {t.quote}
        </h2>
        <p style={{
          fontFamily: '"Clash Grotesk",sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(16px,1.4vw,24px)',
          color: 'rgb(59,59,59)',
          lineHeight: '130%',
        }}>
          {t.body}
        </p>
      </div>

      {/* Profile row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
          <Image
            src={t.img}
            alt={t.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <p className="font-boldonse" style={{ fontSize: 16, color: 'rgb(22,22,20)', textTransform: 'uppercase' }}>
            {t.name}
          </p>
          <p style={{ fontFamily: '"Clash Grotesk",sans-serif', fontWeight: 500, fontSize: 20, color: 'rgb(22,22,20)' }}>
            {t.title}
          </p>
        </div>
      </div>

      {/* Speech bubble tail */}
      <div style={{
        position: 'absolute',
        bottom: -51,
        left: '50%',
        width: 146, height: 96,
        backgroundColor: '#fff',
        WebkitMask: tailMask,
        mask: tailMask,
        transform: 'translateX(-50%)',
      }} />
    </motion.div>
  )
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{
      background: 'rgb(252,206,240)',
      position: 'relative',
      overflow: 'visible',
    }}>
      {/* Top pink scalloped scroller — points UP into white Team section */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0, height: 60, pointerEvents: 'none' }}>
        <ShapeScroller color="rgb(255,255,255)" height={60} direction="down" gap={20} />
      </div>

      <div className="testi-content" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 30px) clamp(100px, 12vw, 180px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 100 }}>
          {/* Title */}
          <div ref={titleRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, textAlign: 'center' }}>
            {/* TESTIMONIALS badge */}
            <Badge
              label="TESTIMONIALS"
              bg="rgb(237,93,58)"
              color="#fff"
              rotate={-8}
              delay={0.2}
              shape="strategy"
              style={{ position: 'relative', top: 55, left: -360 }}
            />

            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(26px,5.5vw,80px)',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(-23x,-0.3vw,-4px)',
              color: 'rgb(22,22,20)',
            }}>
              <AnimatedText text="Trusted by Growing" /><br />
              <AnimatedText text="Brands" />
            </h2>
          </div>

          {/* 2 rows of alternating sized testimonials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }} className="testi-rows">
            {/* Row 1: [Large] [Small] */}
            <div className="testi-row" style={{ display: 'flex', gap: 40 }}>
              <div style={{ flex: 1.4 }}>
                <TestiCard t={TESTIMONIALS[0]} delay={0} />
              </div>
              <div style={{ flex: 1 }}>
                <TestiCard t={TESTIMONIALS[1]} delay={0.1} />
              </div>
            </div>
            {/* Row 2: [Small] [Large] */}
            <div className="testi-row" style={{ display: 'flex', gap: 40 }}>
              <div style={{ flex: 1 }}>
                <TestiCard t={TESTIMONIALS[2]} delay={0} />
              </div>
              <div style={{ flex: 1.4 }}>
                <TestiCard t={TESTIMONIALS[3]} delay={0.1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767.98px) {
          .testi-row { flex-direction: column !important; }
          .testi-content { padding: 80px 20px 100px !important; }
          .testi-card { padding: 40px 24px !important; gap: 32px !important; }
          .testi-rows { gap: 40px !important; }
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .testi-content { padding: 100px 30px 120px !important; }
          .testi-card { padding: 50px 40px !important; }
          .testi-rows { gap: 60px !important; }
        }
      `}</style>
    </section>
  )
}

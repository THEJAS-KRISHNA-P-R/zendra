'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <span ref={ref} style={{ ...style, display: 'inline-block', flexWrap: 'wrap' }}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: wordIdx < words.length - 1 ? '0.3em' : 0 }}>
          {word.split('').map((char, i) => {
            const charIdx = wordIdx * 10 + i;
            return (
              <motion.span
                key={i}
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

const WORKS = [
  {
    name: 'Astra Glow', cat: 'SEO', year: '/2023',
    bg: 'rgb(252,206,240)', light: false,
    img: 'https://framerusercontent.com/images/MXDrMwFk0UtHXWi3bKIbDvTL6I.png',
    size: 'small',
  },
  {
    name: 'Nova Cosmetics', cat: 'PPC', year: '/2023',
    bg: 'rgb(101,157,245)', light: true,
    img: 'https://framerusercontent.com/images/zmm6mWXMQvZkW9TrqCNNmyWPMg.png',
    size: 'large',
  },
  {
    name: 'Celeste Beauty', cat: 'SSL', year: '/2021',
    bg: 'rgb(237,93,58)', light: true,
    img: 'https://framerusercontent.com/images/jCnBbZyJbjRZhOQnLMfnVTQJvDs.jpg',
    size: 'large',
  },
  {
    name: 'Elysia Cosmetics', cat: 'UI', year: '/2022',
    bg: 'rgb(244,255,119)', light: false,
    img: 'https://framerusercontent.com/images/JICyB7guoDFBkVoxrLlsfEykY.png',
  },
  {
    name: 'Serenva Beauty', cat: 'UX', year: '/2023',
    bg: 'rgb(255,211,24)', light: false,
    img: 'https://framerusercontent.com/images/hiKjVqKwqBhYHJ0Zyu8APvaqF38.png',
    size: 'small',
  },
  {
    name: 'Lunara Bloom', cat: 'EMAIL', year: '/2024',
    bg: 'rgb(55,182,105)', light: true,
    img: 'https://framerusercontent.com/images/C8QGj3mn8xuHvAdDnf5HkLKns.png',
  },
]

function WorkCard({ work, delay = 0 }: { work: typeof WORKS[0]; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.a
      ref={ref as any}
      href="#"
      style={{
        background: work.bg,
        border: 'none',
        boxShadow: 'none',
        borderRadius: 56,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        textDecoration: 'none',
        overflow: 'hidden',
        minWidth: 0,
      }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 1.5 }}
    >
      {/* Image */}
      <div style={{ borderRadius: 36, overflow: 'hidden', aspectRatio: '1.32' }}>
        <motion.img
          src={work.img}
          alt={work.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          initial={{ scale: 1.2, filter: 'grayscale(0)', rotate: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          whileHover={{
            scale: 1.4, // Increased zoom for more "pop"
            rotate: 6,
            filter: 'grayscale(1)',
            transition: { duration: 0.45, ease: "circOut" } // Slightly faster for snap
          }}
        />
      </div>
      {/* Card content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h4 className="font-boldonse" style={{
            fontSize: 'clamp(18px,1.6vw,22px)',
            textTransform: 'uppercase',
            color: work.light ? '#fff' : 'rgb(22,22,20)',
            paddingTop: 10,
          }}>
            {work.name}
          </h4>
          <p style={{
            fontFamily: '"Clash Grotesk",sans-serif',
            fontWeight: 500,
            fontSize: 20,
            color: work.light ? '#fff' : 'rgb(59,59,59)',
            lineHeight: '140%',
            paddingTop: 10,
          }}>
            {work.cat}
          </p>
        </div>
        <p style={{
          fontFamily: '"Clash Grotesk",sans-serif',
          fontWeight: 500,
          fontSize: 20,
          color: work.light ? '#fff' : 'rgb(59,59,59)',
          lineHeight: '140%',
        }}>
          {work.year}
        </p>
      </div>
    </motion.a>
  )
}

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section style={{
      background: 'rgb(251,248,233)',
      position: 'relative',
      overflow: 'visible',
    }}>
      {/* Top white scalloped scroller — points DOWN into beige Portfolio section */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0, height: 60, pointerEvents: 'none' }}>
        <ShapeScroller color="rgb(255,255,255)" height={60} direction="down" gap={20} />
      </div>

      <div style={{ padding: '135px 30px 220px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 100 }}>

          {/* Title with Badge */}
          <div ref={titleRef} style={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* PORTFOLIO badge — Scalloped shape */}
            <Badge
              label="PORTFOLIO"
              bg="rgb(237,93,58)"
              color="#fff"
              rotate={-8}
              delay={0.2}
              shape="strategy"
              style={{ position: 'relative', top: 18, left: -100, transform: 'none' }}
            />
            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(26px,5vw,85px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: '90%',
              color: 'rgb(22,22,20)',
              textAlign: 'center',
            }}>
              <AnimatedText text="Our Featured" />
            </h2>
            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(26px,5vw,85px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              marginTop: '20px',
              lineHeight: '90%',
              color: 'rgb(22,22,20)',
              textAlign: 'center',
            }}>
              <AnimatedText text="Works" />
            </h2>
          </div>

          {/* 2-column equal grid */}
          <div className="portfolio-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40,
            width: '100%'
          }}>
            {WORKS.map((work, idx) => (
              <WorkCard key={idx} work={work as any} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom white scalloped scroller — points UP into beige Portfolio section */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 0, height: 60, pointerEvents: 'none' }}>
        <ShapeScroller color="rgb(255,255,255)" height={60} direction="up" gap={20} />
      </div>

      <style>{`
        @media (max-width: 991.98px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'

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

const TEAM = [
  { name: 'Ethan Cole', role: 'Founder & CEO', bg: 'rgb(252,206,240)', light: false, img: 'https://framerusercontent.com/images/3dTJtWynb0GRAuO1pnS8QEwN3Y.png' },
  { name: 'Ava Mitchell', role: 'Creative Director', bg: 'rgb(101,157,245)', light: true, img: 'https://framerusercontent.com/images/oHq8eNbsj5cXSeWbqDLCUMzxoyk.png' },
  { name: 'Liam Parker', role: 'Marketing Strategist', bg: 'rgb(244,255,119)', light: false, img: 'https://framerusercontent.com/images/tgd5wQDlNQzUI8MoFTzoL0uck8.png' },
  { name: 'Sophia Reed', role: 'Social Media Manager', bg: 'rgb(244,255,119)', light: false, img: 'https://framerusercontent.com/images/U7j9bKDgunNVGTOAwX6JE9gG7c.png' },
  { name: 'Noah Bennett', role: 'SEO & Content Lead', bg: 'rgb(237,93,58)', light: true, img: 'https://framerusercontent.com/images/qDU0zj2YSIxDaA6YW19aKKGWv1Q.png' },
  { name: 'Emma Davis', role: 'Paid Ads Specialist', bg: 'rgb(237,93,58)', light: true, img: 'https://framerusercontent.com/images/kfb7R4KHkXA4aN7vhCbUoVhms.png' },
  { name: 'Mason Clark', role: 'Brand Designer', bg: 'rgb(244,255,119)', light: false, img: 'https://framerusercontent.com/images/sbefdbnEA3tSmAW1onjwvQuX1jw.png' },
  { name: 'Olivia Grant', role: 'Client Success Manager', bg: 'rgb(101,157,245)', light: true, img: 'https://framerusercontent.com/images/Ejkv7HZKERWyR4m37vMxGr3xwA.png' },
]

function TeamCard({ member, delay = 0 }: { member: typeof TEAM[0]; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      style={{
        background: member.bg,
        border: '1.5px solid rgb(22,22,20)',
        boxShadow: '0px 4px 0px rgb(22,22,20)',
        borderRadius: 26,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 1.5 }}
      whileHover={{ y: -4, boxShadow: '0px 8px 0px rgb(22,22,20)' }}
    >
      {/* Photo */}
      <motion.div
        style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '1' }}
        initial={{ opacity: 0, y: 60, scale: 0.7 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ type: 'spring', bounce: 0.2, delay: delay + 0.1, duration: 1.5 }}
      >
        <img
          src={member.img}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>
      {/* Info */}
      <div>
        <h4 className="font-boldonse" style={{
          fontSize: 'clamp(16px,1.4vw,24px)',
          textTransform: 'uppercase',
          color: member.light ? '#fff' : 'rgb(22,22,20)',
          marginBottom: 4,
        }}>
          {member.name}
        </h4>
        <p style={{
          fontFamily: '"Clash Grotesk",sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(14px,1.1vw,20px)',
          color: member.light ? '#fff' : 'rgb(59,59,59)',
        }}>
          {member.role}
        </p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section style={{
      background: 'rgb(255,255,255)',
      padding: '220px 30px 194px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 100 }}>
        {/* Title + badge */}
        <div ref={titleRef} style={{ position: 'relative' }}>
          {/* TEAM badge at top-right */}
          <motion.div
            style={{ position: 'absolute', top: 0, left: '40%', transform: 'translate(0,-50%)' }}
            initial={{ opacity: 0.001, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', delay: 0.3, duration: 1 }}
          >
            <div style={{
              background: 'rgb(19,109,245)',
              borderRadius: 100,
              padding: '10px 20px',
              fontFamily: '"Boldonse",sans-serif',
              fontSize: 14,
              color: '#fff',
              textTransform: 'uppercase',
            }}>
              TEAM
            </div>
          </motion.div>
          <h2 className="font-boldonse" style={{
            fontSize: 'clamp(26px,5.5vw,80px)',
            textTransform: 'uppercase',
            letterSpacing: 'clamp(-1px,-0.3vw,-4px)',
            color: 'rgb(22,22,20)',
          }}>
            <AnimatedText text="Meet Our" /><br />
            <AnimatedText text="Passionate Team" />
          </h2>
        </div>

        {/* 4-col grid, 2 rows = 8 cards */}
        <div className="team-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.05} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width:768px) and (max-width:1199.98px) {
          .team-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width:767.98px) {
          .team-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}

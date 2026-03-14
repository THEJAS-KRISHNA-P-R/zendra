'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedText({ text, style }: { text: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  
  // Split by words, then by characters to allow word wrapping
  const words = text.split(' ')
  
  return (
    <span ref={ref} style={{ ...style, display: 'inline-block', flexWrap: 'wrap' }}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: wordIdx < words.length - 1 ? '0.3em' : 0 }}>
          {word.split('').map((char, i) => {
            const charIdx = wordIdx * 10 + i; // rough index for stagger
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

const SERVICES = [
  {
    id: 'seo',
    title: 'SEO Digital Strategy',
    desc: 'We craft customized marketing roadmaps that align with your goals — blending research, creativity.',
    bg: 'rgb(252,206,240)',
    textColor: 'rgb(22,22,20)',
    descColor: 'rgb(59,59,59)',
    img: 'https://framerusercontent.com/images/T1nJDQ6FGv3QidAJIjDXJJis2oU.svg',
  },
  {
    id: 'branding',
    title: 'Branding & Creative Design',
    desc: "Brand identity that stands out. From logo to visual storytelling, we bring your brand's personality to life.",
    bg: 'rgb(244,255,119)',
    textColor: 'rgb(22,22,20)',
    descColor: 'rgb(59,59,59)',
    img: 'https://framerusercontent.com/images/TbwVAL3nmCoUvAkSi50PfLe4.svg',
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    desc: 'Engage your audience and grow your community with strategic social media campaigns.',
    bg: 'rgb(101,157,245)',
    textColor: 'rgb(255,255,255)',
    descColor: 'rgb(255,255,255)',
    img: 'https://framerusercontent.com/images/Qi6rFCH6DfkbgZT3dhKF6Nc70YE.svg',
  },
  {
    id: 'ppc',
    title: 'Paid Advertising (PPC)',
    desc: 'Maximize ROI through targeted ad campaigns on Google, Meta, and beyond designed to boost visible growth.',
    bg: 'rgb(237,93,58)',
    textColor: 'rgb(255,255,255)',
    descColor: 'rgb(255,255,255)',
    img: 'https://framerusercontent.com/images/TeUnJzUCJFy8uOZRGs6bPAcmbzo.svg',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      background: 'rgb(255,255,255)',
      padding: '200px 30px 150px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      position: 'relative',
      overflow: 'visible',
    }}>
      <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 80 }}>
        
        {/* Section title row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ position: 'relative', flex: 1 }}>
            {/* SERVICES badge (framer-itbw66) at top:-10%, left:41% */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-10%', left: '41%',
                transform: 'translate(-50%,-50%)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
              initial={{ opacity: 0.001, y: 800 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 12 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.2, duration: 2 }}
            >
              <div style={{
                position: 'relative', width: 148, height: 80,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundColor: 'rgb(237,93,58)',
                  WebkitMask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 207 109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 77.721 0 C 65.09 0 54.544 9.257 52.009 21.597 C 49.473 9.257 38.927 0 26.297 0 C 11.773 0 0 12.237 0 27.332 C 0 40.459 8.906 51.42 20.779 54.056 C 8.906 56.691 0 67.652 0 80.78 C 0 95.875 11.773 108.112 26.297 108.112 C 38.927 108.112 49.473 98.855 52.009 86.514 C 54.544 98.855 65.09 108.112 77.721 108.112 C 90.351 108.112 100.897 98.855 103.432 86.514 C 105.968 98.855 116.514 108.112 129.144 108.112 C 141.775 108.112 152.32 98.855 154.856 86.514 C 157.392 98.855 167.938 108.112 180.569 108.112 C 195.091 108.112 206.865 95.875 206.865 80.78 C 206.865 67.652 197.959 56.691 186.086 54.056 C 197.959 51.42 206.865 40.459 206.865 27.332 C 206.865 12.237 195.091 0 180.569 0 C 167.938 0 157.392 9.257 154.856 21.597 C 152.32 9.257 141.775 0 129.144 0 C 116.514 0 105.968 9.257 103.432 21.597 C 100.898 9.257 90.351 0 77.721 0 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`,
                  mask: `url("data:image/svg+xml,%3Csvg viewBox='0 0 207 109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 77.721 0 C 65.09 0 54.544 9.257 52.009 21.597 C 49.473 9.257 38.927 0 26.297 0 C 11.773 0 0 12.237 0 27.332 C 0 40.459 8.906 51.42 20.779 54.056 C 8.906 56.691 0 67.652 0 80.78 C 0 95.875 11.773 108.112 26.297 108.112 C 38.927 108.112 49.473 98.855 52.009 86.514 C 54.544 98.855 65.09 108.112 77.721 108.112 C 90.351 108.112 100.897 98.855 103.432 86.514 C 105.968 98.855 116.514 108.112 129.144 108.112 C 141.775 108.112 152.32 98.855 154.856 86.514 C 157.392 98.855 167.938 108.112 180.569 108.112 C 195.091 108.112 206.865 95.875 206.865 80.78 C 206.865 67.652 197.959 56.691 186.086 54.056 C 197.959 51.42 206.865 40.459 206.865 27.332 C 206.865 12.237 195.091 0 180.569 0 C 167.938 0 157.392 9.257 154.856 21.597 C 152.32 9.257 141.775 0 129.144 0 C 116.514 0 105.968 9.257 103.432 21.597 C 100.898 9.257 90.351 0 77.721 0 Z'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`,
                }} />
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontFamily: '"Boldonse",sans-serif', fontSize: 14, color: '#fff',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>SERVICES</span>
              </div>
            </motion.div>

            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(26px,5.5vw,80px)',
              lineHeight: '130%',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(-1px,-0.3vw,-4px)',
              color: 'rgb(22,22,20)',
              maxWidth: 700,
            }}>
              <AnimatedText text="Services We Provide" />
            </h2>
          </div>

          {/* Right: text + button */}
          <div style={{
            maxWidth: 339,
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
            alignItems: 'flex-start',
          }}>
            <p style={{
              fontFamily: '"Clash Grotesk",sans-serif',
              fontWeight: 500,
              fontSize: 20,
              color: 'rgb(59,59,59)',
              lineHeight: '130%',
            }}>
              Discover the full range of marketing services designed to grow your brand and maximize performance.
            </p>
            <motion.a
              href="#"
              style={{
                background: 'rgb(22,22,20)',
                borderRadius: 100,
                padding: '20px 30px',
                fontFamily: '"Boldonse",sans-serif',
                fontSize: 20,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
              whileHover={{ scale: 1.02 }}
            >
              All Services →
            </motion.a>
          </div>
        </div>

        {/* 2x2 service cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {SERVICES.map((svc, idx) => (
            <motion.a
              key={svc.id}
              href="#"
              style={{
                background: svc.bg,
                border: '1.5px solid rgb(22,22,20)',
                boxShadow: '0px 6px 0px rgb(22,22,20)',
                borderRadius: 26,
                padding: '40px 40px 147px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              initial={{ opacity: 0, y: 90, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.1 * idx, duration: 1.5 }}
              whileHover={{ y: -5, boxShadow: '0px 11px 0px rgb(22,22,20)' }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, zIndex: 1, maxWidth: 365 }}>
                <h2 className="font-boldonse" style={{
                  fontSize: 'clamp(20px,2.2vw,32px)',
                  lineHeight: '170%',
                  textTransform: 'uppercase',
                  color: svc.textColor,
                }}>
                  {svc.title}
                </h2>
                <p style={{
                  fontFamily: '"Clash Grotesk",sans-serif',
                  fontWeight: 500,
                  fontSize: 20,
                  color: svc.descColor,
                  lineHeight: '170%',
                }}>
                  {svc.desc}
                </p>
              </div>
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: -57, right: -28,
                  width: '49%',
                  aspectRatio: '1.09',
                  zIndex: 0,
                }}
                whileHover={{ x: -10, y: -10 }}
              >
                <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767.98px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

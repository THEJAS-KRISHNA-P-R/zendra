'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'
import Link from 'next/link'
import Image from 'next/image'


const SERVICES = [
  {
    id: 'seo',
    title: 'SEO Digital Strategy',
    desc: 'We craft customized marketing roadmaps that align with your goals — blending research, creativity.',
    bg: 'rgba(255, 195, 239, 1)',
    hoverBg: 'rgb(250, 212, 172)',
    textColor: 'rgb(22,22,20)',
    descColor: 'rgb(59,59,59)',
    img: '/T1nJDQ6FGv3QidAJIjDXJJis2oU.svg',
    col: '1',
    row: '1',
  },
  {
    id: 'branding',
    title: "Branding & Creative\u00A0Design",
    desc: "Brand identity that stands out. From logo to visual storytelling, we bring your brand's personality to life.",
    bg: 'rgb(244,255,119)',
    hoverBg: 'rgba(255, 209, 25, 1)',
    textColor: 'rgb(22,22,20)',
    descColor: 'rgb(59,59,59)',
    img: '/TbwVAL3nmCoUvAkSi50PfLe4.svg',
    col: '2',
    row: '1',
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    desc: 'Engage your audience and grow your community with strategic social media campaigns.',
    bg: 'rgb(101,157,245)',
    hoverBg: 'rgba(255, 151, 255, 1)',
    textColor: 'rgb(255,255,255)',
    descColor: 'rgb(255,255,255)',
    img: '/Qi6rFCH6DfkbgZT3dhKF6Nc70YE.svg',
    col: '2',
    row: '2',
  },
  {
    id: 'ppc',
    title: 'Paid Advertising (PPC)',
    desc: 'Maximize ROI through targeted ad campaigns on Google, Meta, and beyond designed to boost visible growth.',
    bg: 'rgb(237,93,58)',
    hoverBg: 'rgba(66, 79, 255, 1)',
    textColor: 'rgb(255,255,255)',
    descColor: 'rgb(255,255,255)',
    img: '/zrobo1.svg',
    col: '3',
    row: '2',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="services-section" style={{
      background: 'rgb(255,255,255)',
      padding: 'clamp(80px, 12vw, 200px) clamp(20px, 5vw, 30px) clamp(60px, 10vw, 150px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      position: 'relative',
      overflow: 'visible',
    }}>
      {/* Top Divider ShapeScroller pointing DOWN (Inverted effect: Blue teeth into White) */}
      <div style={{ position: 'absolute', top: -1, left: 0, right: 0, zIndex: 10, height: 60, pointerEvents: 'none' }}>
        <ShapeScroller color="rgb(20,66,213)" height={60} direction="down" gap={20} />
      </div>

      <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 80 }}>

        {/* Section title row */}
        <div className="services-header" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(40px,6vw,80px)',
              lineHeight: '129%',
              letterSpacing: '-4px',
              textTransform: 'uppercase',
              color: 'rgb(22,22,20)',
              maxWidth: 900,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 1,
            }}>
              <span style={{ display: 'block', position: 'relative' }}>
                SERVICES{" "}
                <span style={{ position: 'relative' }}>
                  WE
                  <Badge
                    label="SERVICES"
                    bg="rgb(20,66,213)"
                    shape="strategy"
                    rotate={12}
                    style={{ top: '-10%', left: '50%', transform: 'translate(-50%,-100%)' }}
                  />
                </span>
              </span>
              <span style={{ display: 'block' }}>PROVIDE</span>
            </h2>
          </div>

          {/* Right: text + button */}
          <div className="services-desc-block" style={{
            maxWidth: 339,
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
            alignItems: 'flex-start',
          }}>
            <p style={{
              fontFamily: '"Clash Grotesk",sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(15px,1.4vw,20px)',
              color: 'rgb(59,59,59)',
              lineHeight: '180%',
            }}>
              Discover the full range of marketing services designed to grow your brand and maximize performance.
            </p>
            <motion.a
              href="#"
              style={{
                background: 'rgb(22,22,20)',
                borderRadius: 100,
                padding: '28px 38px',
                fontFamily: '"Boldonse",sans-serif',
                fontSize: 20,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              whileHover={{ scale: 1.02 }}
            >
              All Services
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24 }}><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
          </div>
        </div>

        {/* 3x2 service cards grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 24,
          rowGap: 24,
        }}>
          {SERVICES.map((svc, idx) => (
            <Link
              key={svc.id}
              href="#"
              passHref
              style={{
                textDecoration: 'none',
                gridColumn: svc.col,
                gridRow: svc.row,
              }}
            >
              <motion.div
                style={{
                  background: svc.bg,
                  border: 'none',
                  borderRadius: 'clamp(24px, 4vw, 56px)',
                  padding: 'clamp(24px, 3.5vw, 50px) clamp(20px, 3vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: 'clamp(260px, 35vw, 400px)',
                }}
                variants={{
                  initial: { opacity: 0, y: 90, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                      scale: { type: 'spring', bounce: 0.2, delay: 0.1 * idx, duration: 1.5 },
                      y: { type: 'spring', bounce: 0.2, delay: 0.1 * idx, duration: 1.5 },
                      opacity: { duration: 0.5, delay: 0.1 * idx }
                    }
                  },
                  hover: {
                    backgroundColor: svc.hoverBg,
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }
                }}
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: '-10% 0px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, zIndex: 1, maxWidth: 450 }}>
                  <h2 className="font-boldonse" style={{
                    fontSize: 'clamp(20px,2.2vw,30px)',
                    lineHeight: '180%',
                    textTransform: 'uppercase',
                    color: svc.textColor,
                    letterSpacing: '0px',
                  }}>
                    {svc.title}
                  </h2>
                  <p style={{
                    fontFamily: '"Clash Grotesk",sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(16px,1.4vw,22px)',
                    color: svc.descColor,
                    lineHeight: '150%',
                    maxWidth: '90%',
                  }}>
                    {svc.desc}
                  </p>
                </div>

                <motion.div
                  variants={{
                    initial: { x: 0 },
                    hover: {
                      x: -30,
                      transition: { duration: 0.4, ease: "easeInOut" }
                    }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: -60,
                    right: -10,
                    width: '45%',
                    height: '45%',
                    zIndex: 0,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>


      <style>{`
        @media (max-width: 1024.98px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .services-grid > a {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 767.98px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > a {
            min-height: 280px !important;
          }
          .services-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .services-desc-block {
            max-width: 100% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .services-grid > a {
            min-height: 340px !important;
          }
        }
      `}</style>
    </section>
  )
}

'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeScroller from './ShapeScroller'
import Badge from './Badge'
import Link from 'next/link'
import Image from 'next/image'

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

const POSTS = [
  {
    title: 'The Future of Digital Marketing',
    year: '2023',
    img: 'https://framerusercontent.com/images/vSYQk6wWvuKGsWpjFWEfRzpTLkU.png',
    href: '#',
  },
  {
    title: 'Mastering Client Relationships',
    year: '2023',
    img: 'https://framerusercontent.com/images/LRW8nlBv0oB8zT9NgDDDqOx9d7Q.png',
    href: '#',
  },
]

function BlogCard({ post, delay = 0 }: { post: typeof POSTS[0]; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <Link
      href={post.href}
      passHref
      style={{ textDecoration: 'none', flex: 1, minWidth: 0 }}
    >
      <motion.div
        ref={ref}
        style={{
          background: 'rgb(251,248,233)',
          borderRadius: 'clamp(24px, 4vw, 56px)',
          padding: 'clamp(16px, 2.5vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          flex: 1,
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', bounce: 0.2, delay, duration: 1.5 }}
        whileHover="hover"
      >
        <div style={{ borderRadius: 'clamp(20px, 3vw, 36px)', overflow: 'hidden', aspectRatio: '1.37', position: 'relative' }}>
          <motion.div
            style={{ width: '100%', height: '100%' }}
            variants={{
              initial: { scale: 1.2, filter: 'grayscale(0)', rotate: 0 },
              animate: { scale: 1 },
              hover: {
                scale: 1.4,
                rotate: -6,
                filter: 'grayscale(1)',
                transition: { duration: 0.45, ease: "circOut" }
              }
            }}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={post.img}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h4 className="font-boldonse" style={{
            fontSize: 'clamp(18px,1.6vw,22px)',
            textTransform: 'uppercase',
            color: 'rgb(22,22,20)',
            flex: 1,
          }}>
            {post.title}
          </h4>
          <p style={{
            fontFamily: '"Clash Grotesk",sans-serif',
            fontWeight: 500,
            fontSize: 20,
            color: 'rgb(59,59,59)',
            whiteSpace: 'nowrap',
            marginLeft: 12,
          }}>
            / {post.year}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default function Blog() {
  const titleRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{
      background: 'rgb(255,255,255)',
      position: 'relative',
      overflow: 'visible',
    }}>
      {/* Top white scalloped scroller — points UP into pink Testimonials section */}
      <div style={{ position: 'absolute', top: -30, left: 0, right: 0, zIndex: 0, height: 30, pointerEvents: 'none' }}>
        <ShapeScroller color="rgb(255,255,255)" height={30} direction="up" gap={20} />
      </div>

      <div className="blog-content" style={{ padding: 'clamp(80px, 12vw, 200px) clamp(20px, 5vw, 30px) clamp(80px, 12vw, 190px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 100 }}>
          {/* Title */}
          <div ref={titleRef} style={{ textAlign: 'center', maxWidth: 691, margin: '0 auto', position: 'relative' }}>
            {/* BLOGS badge */}
            <Badge
              label="BLOGS"
              bg="rgb(20,66,213)"
              color="#fff"
              rotate={12}
              delay={0.2}
              shape="strategy"
              style={{ position: 'relative', top: 55, left: 440 }}
            />
            <h2 className="font-boldonse" style={{
              fontSize: 'clamp(26px,5.5vw,80px)',
              textTransform: 'uppercase',
              lineHeight: '130%',
              letterSpacing: 'clamp(-3px,-0.3vw,-4px)',
              color: 'rgb(22,22,20)',
            }}>
              <AnimatedText text="From Our" /><br></br>
              <AnimatedText text="Blog" />
            </h2>
          </div>

          {/* 2-col blog cards */}
          <div className="blog-cards" style={{ display: 'flex', gap: 40 }}>
            {POSTS.map((post, i) => (
              <BlogCard key={post.title} post={post} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767.98px) {
          .blog-content {
            padding: 80px 20px 80px !important;
          }
          .blog-cards {
            flex-direction: column !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
          .blog-content {
            padding: 120px 30px 120px !important;
          }
        }
      `}</style>
    </section>
  )
}

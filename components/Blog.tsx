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
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref as any, { once: true })

  return (
    <motion.a
      ref={ref as any}
      href={post.href}
      style={{
        background: 'rgb(251,248,233)',
        borderRadius: 56, // Matched with Portfolio
        padding: 32,      // Matched with Portfolio
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        textDecoration: 'none',
        flex: 1,
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 1.5 }}
    >
      <div style={{ borderRadius: 36, overflow: 'hidden', aspectRatio: '1.37' }}>
        <motion.img
          src={post.img}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          initial={{ scale: 1.2, filter: 'grayscale(0)', rotate: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          whileHover={{ 
            scale: 1.4, 
            rotate: -6, // Flipped to left
            filter: 'grayscale(1)',
            transition: { duration: 0.45, ease: "circOut" }
          }}
        />
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
    </motion.a>
  )
}

export default function Blog() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })

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

      <div style={{ padding: '200px 30px 190px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ width: '100%', maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 100 }}>
          {/* Title */}
          <div ref={titleRef} style={{ textAlign: 'center', maxWidth: 691, margin: '0 auto', position: 'relative' }}>
            {/* BLOGS badge */}
            <Badge
              label="BLOGS"
              bg="rgb(237,93,58)"
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
          <div style={{ display: 'flex', gap: 40 }}>
            {POSTS.map((post, i) => (
              <BlogCard key={post.title} post={post} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

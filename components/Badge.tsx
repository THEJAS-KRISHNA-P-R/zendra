'use client'
import { motion } from 'framer-motion'

type BadgeProps = {
  label: string
  bg: string
  color?: string
  rotate?: number
  y?: number
  delay?: number
  style?: React.CSSProperties
  className?: string
  shape?: 'branding' | 'marketing' | 'strategy' | 'flatPill'
  drag?: boolean
}

const shapes: Record<string, { path: string; viewBox: string }> = {
  branding: {
    path: "M 0 17.5 A 17.5 17.5 0 0 1 35 17.5 A 17.5 17.5 0 0 1 70 17.5 A 17.5 17.5 0 0 1 105 17.5 A 17.5 17.5 0 0 1 140 17.5 A 17.5 17.5 0 0 1 175 17.5 A 17.5 17.5 0 0 1 210 17.5 L 210 77.5 A 17.5 17.5 0 0 1 175 77.5 A 17.5 17.5 0 0 1 140 77.5 A 17.5 17.5 0 0 1 105 77.5 A 17.5 17.5 0 0 1 70 77.5 A 17.5 17.5 0 0 1 35 77.5 A 17.5 17.5 0 0 1 0 77.5 Z",
    viewBox: "0 0 210 95"
  },
  marketing: {
    path: "M 0 17.5 A 17.5 17.5 0 0 1 35 17.5 A 17.5 17.5 0 0 1 70 17.5 A 17.5 17.5 0 0 1 105 17.5 A 17.5 17.5 0 0 1 140 17.5 A 17.5 17.5 0 0 1 175 17.5 A 17.5 17.5 0 0 1 210 17.5 L 210 77.5 A 17.5 17.5 0 0 1 175 77.5 A 17.5 17.5 0 0 1 140 77.5 A 17.5 17.5 0 0 1 105 77.5 A 17.5 17.5 0 0 1 70 77.5 A 17.5 17.5 0 0 1 35 77.5 A 17.5 17.5 0 0 1 0 77.5 Z",
    viewBox: "0 0 210 95"
  },
  strategy: {
    path: "M 130.465 90.914 C 143.224 90.914 153.878 83.13 156.439 72.752 C 159.002 83.13 169.655 90.914 182.415 90.914 C 197.086 90.914 208.98 80.624 208.98 67.93 C 208.98 56.891 199.983 47.673 187.988 45.457 C 199.983 43.241 208.98 34.023 208.98 22.984 C 208.98 10.29 197.086 0 182.415 0 C 169.655 0 159.002 7.784 156.439 18.162 C 153.878 7.784 143.224 0 130.465 0 C 117.706 0 107.052 7.784 104.49 18.162 C 101.928 7.784 91.275 0 78.515 0 C 65.756 0 55.102 7.784 52.54 18.162 C 49.979 7.784 39.325 0 26.565 0 C 11.894 0 0 10.29 0 22.984 C 0 34.023 8.997 43.241 20.992 45.457 C 8.997 47.673 0 56.891 0 67.93 C 0 80.624 11.894 90.914 26.565 90.914 C 39.325 90.914 49.979 83.13 52.54 72.752 C 55.102 83.13 65.756 90.914 78.515 90.914 C 91.275 90.914 101.928 83.13 104.49 72.752 C 107.051 83.13 117.706 90.914 130.465 90.914 Z",
    viewBox: "0 0 209 98"
  },
  flatPill: {
    path: "M 0 17.5 A 17.5 17.5 0 0 1 35 17.5 A 17.5 17.5 0 0 1 70 17.5 A 17.5 17.5 0 0 1 105 17.5 A 17.5 17.5 0 0 1 140 17.5 A 17.5 17.5 0 0 1 175 17.5 A 17.5 17.5 0 0 1 210 17.5 L 210 77.5 A 17.5 17.5 0 0 1 175 77.5 A 17.5 17.5 0 0 1 140 77.5 A 17.5 17.5 0 0 1 105 77.5 A 17.5 17.5 0 0 1 70 77.5 A 17.5 17.5 0 0 1 35 77.5 A 17.5 17.5 0 0 1 0 77.5 Z",
    viewBox: "0 0 210 95"
  }
}

export default function Badge({
  label, bg, color = '#fff', rotate = 0, y = 800, delay = 0.2,
  style, className, shape = 'marketing', drag = true
}: BadgeProps) {
  const currentShape = shapes[shape] || shapes.marketing
  const badgeMask = `url("data:image/svg+xml,%3Csvg viewBox='${currentShape.viewBox}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${currentShape.path}'%2F%3E%3C%2Fsvg%3E") alpha no-repeat center/contain`

  return (
    <motion.div
      className={`hidden lg:block ${className || ''}`}
      style={{ position: 'absolute', ...style, zIndex: 10, cursor: 'default' }}
      drag={drag ? true : false}
      dragSnapToOrigin={true}
      dragElastic={0.1}
      dragTransition={{ power: 0.3, timeConstant: 200 }}
      initial={{ opacity: 0.001, y, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ type: 'spring', bounce: 0.2, delay, duration: 2 }}
    >
      <div style={{
        position: 'relative',
        width: 174,
        height: 75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: bg,
          WebkitMask: badgeMask,
          mask: badgeMask,
        }} />
        <span style={{
          position: 'relative', zIndex: 1,
          fontFamily: '"Boldonse",sans-serif',
          fontSize: 16,
          fontWeight: 400,
          color,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
        }}>
          {label}
        </span>
      </div>
    </motion.div>
  )
}

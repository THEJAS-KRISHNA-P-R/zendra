// Reusable scrolling scalloped divider
// Supports up/down directions, customizable gaps, and colors

interface ShapeScrollerProps {
  color: string
  height?: number
  direction?: 'up' | 'down'
  gap?: number
}

export default function ShapeScroller({
  color,
  height = 100,
  direction = 'down',
  gap = 20
}: ShapeScrollerProps) {
  const count = 150 // Massive count for ultra-wide/5K support (150 * 75px = 11,250px)
  const bumpWidth = 55
  const bumpHeight = 30

  return (
    <div style={{
      width: '100%',
      height,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: direction === 'down' ? 'column' : 'column-reverse',
      alignItems: 'flex-start',
      position: 'relative',
    }}>
      {/* 1. Solid Connection Bar */}
      <div style={{
        width: '100%',
        height: height - bumpHeight,
        backgroundColor: color
      }} />

      {/* 2. Track of Bumps */}
      <div className="shape-track" style={{
        height: bumpHeight,
        display: 'flex',
        flexDirection: 'row',
        whiteSpace: 'nowrap',
        width: 'fit-content',
        animation: 'scroll-left 60s linear infinite',
        marginTop: direction === 'down' ? -1 : 0,
        marginBottom: direction === 'up' ? -2 : 0,
      }}>
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            style={{
              width: bumpWidth,
              height: bumpHeight,
              backgroundColor: color,
              flexShrink: 0,
              marginRight: gap,
              borderRadius: direction === 'down' ? `0 0 ${bumpWidth / 2}px ${bumpWidth / 2}px` : `${bumpWidth / 2}px ${bumpWidth / 2}px 0 0`,
            }}
          />
        ))}
        {/* Repeating set for seamless loop */}
        {[...Array(count)].map((_, i) => (
          <div
            key={`dup-${i}`}
            style={{
              width: bumpWidth,
              height: bumpHeight,
              backgroundColor: color,
              flexShrink: 0,
              marginRight: gap,
              borderRadius: direction === 'down' ? `0 0 ${bumpWidth / 2}px ${bumpWidth / 2}px` : `${bumpWidth / 2}px ${bumpWidth / 2}px 0 0`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

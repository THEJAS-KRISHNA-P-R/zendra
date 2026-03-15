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
  const count = 60 // Enough to fill 4K width (60 * 70px = 4200px)
  const bumpWidth = 55
  const bumpHeight = 30

  return (
    <div style={{
      width: '100%',
      height,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: direction === 'down' ? 'column' : 'column-reverse',
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* 1. Solid Connection Bar */}
      <div style={{
        width: '100%',
        height: height - bumpHeight,
        backgroundColor: color
      }} />

      {/* 2. Animated Track of Bumps */}
      <div className="shape-track" style={{ height: bumpHeight }}>
        {[...Array(count * 2)].map((_, i) => (
          <div
            key={i}
            style={{
              width: bumpWidth,
              height: bumpHeight,
              backgroundColor: color,
              flexShrink: 0,
              margin: `0 ${gap / 2}px`,
              borderRadius: direction === 'down' ? `0 0 ${bumpWidth / 2}px ${bumpWidth / 2}px` : `${bumpWidth / 2}px ${bumpWidth / 2}px 0 0`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

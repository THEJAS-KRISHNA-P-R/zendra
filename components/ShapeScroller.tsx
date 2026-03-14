// Scrolling scalloped shape ticker — matches framer-dfwQr in DOM
// Used at section boundaries as animated dividers

interface ShapeScrollerProps {
  color: string
  height?: number
}

export default function ShapeScroller({ color, height = 252 }: ShapeScrollerProps) {
  // Repeat enough shapes to fill 2 viewport widths (for seamless loop)
  const count = 28

  return (
    <div style={{
      width: '100%',
      height,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }}>
      <div className="shape-track">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="scalloped"
            style={{ backgroundColor: color, margin: '0 10px' }}
          />
        ))}
      </div>
    </div>
  )
}

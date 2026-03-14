/* 
  Ticker component — 3 variants matching DOM:
  - "cream"  : cream bg rgb(251,248,233), dark text  — between Portfolio & Team
  - "pink"   : pink bg  rgb(252,206,240), dark text  — before Testimonials & Blog
  - "dark"   : dark bg  rgb(22,22,20),   cream text  — (unused but kept for reference)
*/
export default function Ticker({ variant = 'cream' }: { variant?: 'cream' | 'pink' | 'dark' }) {
  const configs = {
    cream: { bg: 'rgb(251, 248, 233)', color: 'rgb(22, 22, 20)' },
    pink:  { bg: 'rgb(252, 206, 240)', color: 'rgb(22, 22, 20)' },
    dark:  { bg: 'rgb(22, 22, 20)',    color: 'rgb(251, 248, 233)' },
  }
  const { bg, color } = configs[variant]
  const item = 'AWARD WINNER DIGITAL AGENCY ★  '
  const content = item.repeat(10)

  return (
    <div style={{
      background: bg,
      overflow: 'hidden',
      padding: '18px 0',
      whiteSpace: 'nowrap',
      borderTop: `1px solid rgba(0,0,0,0.06)`,
      borderBottom: `1px solid rgba(0,0,0,0.06)`,
    }}>
      <div className="ticker-track" style={{ display: 'inline-flex' }}>
        {[content, content].map((c, i) => (
          <span key={i} style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(14px, 1.8vw, 20px)',
            color,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>{c}</span>
        ))}
      </div>
    </div>
  )
}

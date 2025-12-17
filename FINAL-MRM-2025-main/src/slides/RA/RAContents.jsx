import { useEffect, useRef, useState } from 'react'

const items = [
  {
    number: '01',
    title: 'Product License CLA/SLA',
    subtitle: 'Submitted, Approved, Inprocess, Queries, Products in pipeline',
    color: '#2563eb',
    highlight: '#60a5fa'
  },
  {
    number: '02',
    title: 'Global Registrations',
    subtitle: 'Countrywise product registration status (registered / ongoing)',
    color: '#ef4444',
    highlight: '#f87171'
  },
  {
    number: '03',
    title: 'Technical Dossier',
    subtitle: 'Section-Wise schedule for WHO Technical Dossier (TD)',
    color: '#0891b2',
    highlight: '#22d3ee'
  },
  {
    number: '04',
    title: 'Implementation',
    subtitle: 'IVDR 2017/746 implementation and Launch of regulatory update forum',
    color: '#f59e0b',
    highlight: '#fbbf24'
  },
  {
    number: '05',
    title: 'Quality Objectives',
    subtitle: 'Current status of quality objectives 2025',
    color: '#0f766e',
    highlight: '#2dd4bf'
  },
  {
    number: '06',
    title: 'QMS Certifications',
    subtitle: 'ISO 13485, MDSAP, IVDR 2017/746 certificates',
    color: '#a855f7',
    highlight: '#d8b4fe'
  }
]

export default function RAContents() {
  const [hovered, setHovered] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const timersRef = useRef([])

  const startAnimation = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setVisibleItems([])

    timersRef.current = items.map((_, idx) =>
      setTimeout(() => {
        setVisibleItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]))
      }, 80 + idx * 140)
    )
  }

  useEffect(() => {
    startAnimation()

    const handleSlideChange = (event) => {
      const slide = event?.currentSlide || event?.detail?.currentSlide
      const state = slide?.dataset?.state
      if (state === 'ra-contents') {
        startAnimation()
      }
    }

    window.addEventListener('slidechanged', handleSlideChange)

    return () => {
      window.removeEventListener('slidechanged', handleSlideChange)
      timersRef.current.forEach(clearTimeout)
    }
  }, [])

  return (
    <section
      data-state="ra-contents"
      style={{
        height: '100vh',
        width: '100%',
        background: '#ffffff',
        padding: '36px 60px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        fontFamily: "'Inter', -apple-system, sans-serif"
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: '3.2rem',
          fontWeight: 900,
          color: '#e60000',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase'
        }}
      >
        Contents
      </h1>

      <div
        style={{
          height: '4px',
          width: '100%',
          background: 'linear-gradient(90deg, #ef4444 0%, #3b82f6 100%)',
          borderRadius: '4px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
          marginBottom: '18px'
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
        {items.map((item, idx) => {
          const isHovered = hovered === item.number
          const isVisible = visibleItems.includes(idx)

          return (
          <div
            key={item.number}
            style={{
              display: 'grid',
              gridTemplateColumns: '190px 1fr',
              alignItems: 'stretch',
              height: '118px',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0px)' : 'translateY(18px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease'
            }}
            onMouseEnter={() => setHovered(item.number)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={() => setHovered(item.number)}
          >
            {/* Number pill with chevron edge */}
            <div
              style={{
                position: 'relative',
                background: `linear-gradient(135deg, ${item.highlight}, ${item.color})`,
                color: '#fff',
                fontWeight: 900,
                fontSize: '2.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '-0.02em',
                clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                transform: isVisible
                  ? isHovered
                    ? 'translateY(-4px)'
                    : 'translateY(0px)'
                  : 'translateY(18px)',
                boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.12)' : 'none'
              }}
            >
              {item.number}
            </div>

            {/* Text block */}
            <div
              style={{
                  border: `5px solid ${item.color}`,
                  borderRadius: '8px',
                  padding: '18px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '6px',
                  boxShadow: hovered === item.number
                    ? `0 18px 32px rgba(0,0,0,0.14), 0 0 0 3px ${item.highlight}60`
                    : '0 10px 22px rgba(0,0,0,0.08)',
                  transform: isVisible
                    ? isHovered
                      ? 'translateY(-4px)'
                      : 'translateY(0px)'
                    : 'translateY(18px)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
                <div style={{ fontSize: '1.55rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.01em' }}>{item.title}</div>
                <div style={{ fontSize: '1.1rem', color: '#4b5563', fontWeight: 600, lineHeight: 1.35 }}>{item.subtitle}</div>
            </div>
          </div>
            )
          })}
      </div>
    </section>
  )
}
